<template>
  <div>
    <input v-model.number="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
    <br/>

    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
    <br/>

    <input type="checkbox" id="checkbox" v-model="checked" true-value="yes" false-value="no">
    <label for="checkbox">{{ checked }}</label>
    <br/>

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
    <br>

    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span>
    <br>

    <select v-model="selected">
      <option disabled value="">请选择</option>
      <option :value="{number:123}">A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
    <br>

    <select v-model="multiSelected" multiple style="width: 50px;">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <br>
    <span>Selected: {{ multiSelected }}</span>
    <br>

    <select v-model="selected">
      <option v-for="option in options" v-bind:value="option.value" :key="option.value">
      {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      checked: false,
      checkedNames: [],
      picked: '',
      selected: '',
      multiSelected: [],
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    }
  }
}
</script>