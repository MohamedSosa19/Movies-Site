import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies: any[],searchTxt:string ): any {
    return movies.filter((item)=>{
      if(item.title){
        return item.title.toLowerCase().includes(searchTxt.toLocaleLowerCase())
      }
      else{
        return item.name.toLowerCase().includes(searchTxt.toLocaleLowerCase())
      }
    });
  }

}
