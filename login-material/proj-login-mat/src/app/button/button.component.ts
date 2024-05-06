import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
fun=()=>{
  console.log("clicked")
}
fun1=()=>{
  console.log('mouse over')
}
fun2=()=>{
  console.log("mouse entered")
}
fun3=()=>{
  console.log("mouse leave")
}
fun4=()=>{
  console.log("mouse down")
}
fun5=()=>{
  console.log("mouse up")
}
fun6=()=>{
  console.log("mouse out")
}
fun7=()=>{
  console.log("mouse wheel")
}
fun8=(event:any)=>{
  if(event.key=="a")
  console.log("a key pressed ")
}

fun9=()=>{
  console.log("key down")

}
fun10=()=>{
  console.log("key up")
}
}
