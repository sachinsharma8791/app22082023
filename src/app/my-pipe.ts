import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
name:'mpipe',
})

export class MyPipe implements PipeTransform{
transform(value: any, ...args: any[]) {
    return 'aao kabhi haweli pe'
}

}
