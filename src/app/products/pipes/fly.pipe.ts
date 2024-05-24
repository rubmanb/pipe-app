import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform{


  transform(fly: boolean): string {
    return ( fly ) ? 'Vuela' : 'No vuela';
  }

}
