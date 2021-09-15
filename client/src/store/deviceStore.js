import { makeAutoObservable } from "mobx"

export default class DeviceStore {
   constructor() {
      this._types = [
         { id: 1, name: "cellphone" },
         { id: 2, name: "TV" },
         { id: 3, name: "PS" },
         { id: 4, name: "Xbox" },
         { id: 5, name: "Laptops" },
      ]
      this._brands = [
         { id: 1, name: "Apple" },
         { id: 2, name: "Samsung" },
         { id: 3, name: "Lenovo" },
         { id: 4, name: "LG" },
         { id: 5, name: "Xiaomi" },
      ]
      this._device = [
         { id: 1, name: 'Pro 12', price: 29000, rating: 0, img: 'https://cdn.alza.cz/Foto/f16/RI/RI034b1.jpg', },
         { id: 2, name: 'Note 12', price: 29000, rating: 0, img: 'https://cdn.alza.cz/ImgW.ashx?fd=f16&cd=SAMO0197b2' },
      ]
      this._selectedType = {}
      this._selectedBrand = {}
      this._selectedDevice = {}
      makeAutoObservable(this)
   }
   setType(type) {
      this._types = type
   }
   setBrand(brand) {
      this._brands = brand
   }
   setDevice(device) {
      this._device = device
   }
   setSelectedType(type) {
      this._selectedType = type
   }
   setSelectedBrand(brand) {
      this._selectedBrand = brand
   }
   setSelectedDevice(device) {
      this._selectedDevice = device
   }
   get type() {
      return this._types
   }
   get brand() {
      return this._brands
   }
   get device() {
      return this._device
   }
   get selectType() {
      return this._selectedType
   }
   get selectBrand() {
      return this._selectedBrand
   }
   get selectDevice() {
      return this._selectedDevice
   }


}