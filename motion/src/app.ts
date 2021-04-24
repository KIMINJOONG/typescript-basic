import { Component } from './components/component.js';
import { InputDialog, MediaData, TextData } from './components/dialog/dialog.js';
import { MediaSectionInput } from './components/dialog/input/media-input.js';
import { TextSectionInput } from './components/dialog/input/text-input.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';

type InputComponentConstroctor<T = (MediaData | TextData) & Component > = {
  new (): T;
};
class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    // const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
    // this.page.addChild(image);

    // const video = new VideoComponent('Video Title', 'https://youtu.be/K3-jG52XwuQ');
    // this.page.addChild(video);

    // const note = new NoteComponent('Note Title', 'Note Body');
    // this.page.addChild(note);

    // const todo = new TodoComponent('Todo Title', 'TodoItem');
    // this.page.addChild(todo);

    this.bindElementToDialog<MediaSectionInput>(
      '#new-image', 
      MediaSectionInput, 
      (input: MediaSectionInput) => new ImageComponent(input.title, input.url)
    );

    this.bindElementToDialog<MediaSectionInput>(
      '#new-video', 
      MediaSectionInput, 
      (input: MediaSectionInput) => new VideoComponent(input.title, input.url)
    );

    this.bindElementToDialog<TextSectionInput>(
      '#new-note', 
      TextSectionInput, 
      (input: TextSectionInput) => new NoteComponent(input.title, input.body)
    );

    this.bindElementToDialog<TextSectionInput>(
      '#new-toddo', 
      TextSectionInput, 
      (input: TextSectionInput) => new TodoComponent(input.title, input.body)
    );



  }

  private bindElementToDialog<T extends (MediaData | TextData) & Component>(
    selector: string, 
    InputComponent: InputComponentConstroctor<T>,
    makeSection: (input: T) => Component
    ) {
    const element = document.querySelector(selector)! as HTMLButtonElement;
    element.addEventListener('click', () => {
      const dialog = new InputDialog();
      const input = new InputComponent();
      dialog.addChild(input);
      dialog.attachTo(this.dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const image = makeSection(input);
        this.page.addChild(image);
        dialog.removeFrom(this.dialogRoot);
      });

      dialog.attachTo(document.body);
    });

  }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);