export interface SlideImageModel {
    src: string
}

export interface SlideTextModel {
    title: string,
    description: string
}

export interface SlideViewModel {
    class: string,
    style: string
}

export interface SlideModel {
    id: number,
    text: SlideTextModel,
    image: SlideImageModel,
    view: SlideViewModel
}

export interface SliderModel {
    slides: SlideModel[],
    current: number
}
