import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Post[];
  isEdit:boolean=false;
  constructor(private dataService:DataService) { 
    console.log('constructor ran..');
    
  }

  ngOnInit() {
    console.log('ngOnInit ran...');
    this.name='Vivek Manikandan D';
    this.age=25;
    this.email='vivek21193@gmail.com';
    this.address={
      street:'Old Street',
      city:'Salem',
      state:'Tamilnadu'
    }
    this.hobbies=['Write code','Watch movies','Listen to AR Rahman music'];
    this.hello='hello';

    //Calling dataservice
    this.dataService.getPosts().subscribe((posts)=>{
      console.log(JSON.stringify(posts))
      this.posts=posts;
    });
  }

  OnClick(){
      this.name='Surya Velayudam Dhanapal';
      this.hobbies.push('New Hobby');
  }

  addHobby(hobby){
    console.log(hobby)
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby)
  {
    console.log(hobby)
    //this.hobbies.splice(hobby,1); //My idea of deleting, here hobby is the index of the element which we are deleting
    
    //Brad Traversy Tutorial idea
    for(let i=0;i<this.hobbies.length;i++)
    {
      if(this.hobbies[i]==hobby)
      {
        this.hobbies.splice(i,1);
      }
    }
  }

  toggleEdit()
  {
    this.isEdit = !this.isEdit;
  }

}

interface Address{
  street:string,
  city:string,
  state:string
}

interface Post{
  userid:number,
  id:number,
  title:string,
  body:string
}
