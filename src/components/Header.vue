<template>
    <div>
        <h1>Fruits</h1>
        <br/>
        <div class="row text-center">
        <div class="col-3"></div>
        <div class="col-6">
            <table class="table">
                <thead>
                    <tr>
                        <th style="width: 50%;">
                            <input type="text" class="form-control form-control-sm" name="nameFruit" v-model="newNameFruit">
                        </th>
                        <th>
                            <input type="number" class="form-control form-control-sm" name="quantity" v-model="newQuantity">
                        </th>
                        <th>
                            <button class="btn btn-success btn-sm text-white" @click="onAddFruits({name: newNameFruit, quantity: newQuantity}), reset()">
                                Add
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(fruit, index) in fruits" :key="index">
                        <td> {{fruit.name}} </td>
                        <td> {{fruit.quantity}} </td>
                        <td>
                            <button class="btn btn-danger btn-sm text-white" @click="onDeleteFruit(index)">
                                Eliminar
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-3"></div>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

export default {
    name: 'Header',
    data() {
        return {
            newNameFruit: '',
            newQuantity: 0
        }
    },
    methods: {
        ...mapMutations(['onAddFruits', 'onDeleteFruit']),
        reset() {
            this.newNameFruit = '';
            this.newQuantity = 0;
        }
        
    },
    computed: {
        ...mapState(['fruits'])
    }
}
</script>