import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import html2canvas from "html2canvas";
import "./TierList.css";

export default function UniqueTierList() {
  const [categories, setCategories] = useState([
    { id: "s", name: "S", items: [] },
    { id: "a", name: "A", items: [] },
    { id: "b", name: "B", items: [] },
    { id: "c", name: "C", items: [] },
  ]);

  const [items, setItems] = useState([
    {
      id: "item-1",
      name: "Item 1",
      imageUrl: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRIiyRW0hVBB2t9FpvsKzXBDeBRXtJXxIlbs3_tEwh3Xr06xCLtRx_h823mTmpplVjDnEDKZcDhT95kjSs",
    },
    {
      id: "item-2",
      name: "Item 2",
      imageUrl: "https://via.placeholder.com/80",
    },
  ]);

  // Ajouter une catégorie
  const addCategory = () => {
    const newCategory = {
      id: `new-${categories.length}`,
      name: "Nouvelle Catégorie",
      items: [],
    };
    setCategories([...categories, newCategory]);
  };

  // Supprimer une catégorie
  const removeCategory = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  // Modifier le nom d'une catégorie
  const updateCategoryName = (id, newName) => {
    setCategories(
      categories.map((category) =>
        category.id === id ? { ...category, name: newName } : category
      )
    );
  };

  // Gestion du Drag & Drop
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination, draggableId } = result;

    let movedItem;
    let updatedCategories = [...categories];

    // Supprimer l'élément de sa position d'origine
    if (source.droppableId === "items") {
      movedItem = items.find((item) => item.id === draggableId);
      setItems(items.filter((item) => item.id !== draggableId));
    } else {
      updatedCategories = updatedCategories.map((category) => {
        if (category.id === source.droppableId) {
          const updatedItems = category.items.filter(
            (item) => item.id !== draggableId
          );
          movedItem = category.items.find((item) => item.id === draggableId);
          return { ...category, items: updatedItems };
        }
        return category;
      });
    }

    // Ajouter l'élément à sa nouvelle position
    if (destination.droppableId === "items") {
      setItems([...items, movedItem]);
    } else {
      updatedCategories = updatedCategories.map((category) => {
        if (category.id === destination.droppableId) {
          const updatedItems = [...category.items];
          updatedItems.splice(destination.index, 0, movedItem);
          return { ...category, items: updatedItems };
        }
        return category;
      });
    }

    setCategories(updatedCategories);
  };

  // Télécharger la Tier List en image
  const downloadTierList = () => {
    html2canvas(document.querySelector(".unique-tierlist-container")).then(
      (canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "tierlist.png";
        link.click();
      }
    );
  };

  return (
    <div className="unique-tierlist-page">
      <h1 className="unique-tierlist-title">📊 Ma Tier List</h1>
      <button className="btn add-category-btn" onClick={addCategory}>
        ➕ Ajouter une catégorie
      </button>
      <button className="btn download-btn" onClick={downloadTierList}>
        📥 Télécharger
      </button>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="unique-tierlist-container">
          {categories.map((category) => (
            <Droppable
              key={category.id}
              droppableId={category.id}
              direction="horizontal"
            >
              {(provided) => (
                <div className="unique-tier-category">
                  <input
                    className="unique-category-title"
                    value={category.name}
                    onChange={(e) =>
                      updateCategoryName(category.id, e.target.value)
                    }
                  />
                  <button
                    className="tierlist-delete-btn"
                    onClick={() => removeCategory(category.id)}
                  >
                    ❌
                  </button>

                  <div
                    className="unique-tier-items-row"
                    ref={provided.innerRef} // ✅ Seule cette div reçoit le ref et droppableProps
                    {...provided.droppableProps}
                  >
                    {category.items.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef} // ✅ Correctement appliqué sur l'élément draggable
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`unique-tier-item ${
                              snapshot.isDragging ? "dragging" : ""
                            }`}
                            style={{
                              ...provided.draggableProps.style, // ✅ Nécessaire pour le drag
                              zIndex: snapshot.isDragging ? 1000 : "auto",
                            }}
                          >
                            <img
                              src={item.imageUrl}
                              alt={item.name}
                              className="unique-item-image"
                            />
                            <p>{item.name}</p>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder} {/* ✅ Placeholder bien placé */}
                  </div>
                </div>
              )}
            </Droppable>
          ))}

          {/* ✅ Pool des éléments */}
          <div className="unique-items-pool-container">
            <h2>🛠 Éléments</h2>
            <Droppable droppableId="items" direction="horizontal">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="unique-items-pool"
                >
                  {items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`unique-tier-item ${
                            snapshot.isDragging ? "dragging" : ""
                          }`}
                          style={{
                            ...provided.draggableProps.style, // ✅ Positionnement dynamique
                            zIndex: snapshot.isDragging ? 1000 : "auto",
                          }}
                        >
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="unique-item-image"
                          />
                          <p>{item.name}</p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}
