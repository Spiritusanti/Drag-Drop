// Drag and Drop Interfaces
export interface Draggable {
    DragStartHandler(event: DragEvent): void;
    DragEndHandler(event: DragEvent): void;
}

export interface DragTarget {
    DragOverHandler(event: DragEvent): void;
    DropHandler(event: DragEvent): void;
    DropLeaveHandler(event: DragEvent): void;
}

