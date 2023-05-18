import { Controller } from "@hotwired/stimulus"
import Sortable from "sortablejs"
// Sortable
export default class extends Controller {
    connect() {
        console.log(this.element)
        this.initSortable()
    }

    initSortable(){
        Sortable.create(this.element, {
            ghostClass: "ghost",
            animation: 150,
            onEnd: (event) => {
              alert(`${event.oldIndex} moved to ${event.newIndex}`)
            }
        })
    }
}