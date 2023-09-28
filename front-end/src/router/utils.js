import { ref } from 'vue';

const universalModal = ref({
  title: '',
  visible: false
});

const openUniversalModal = (title) => {
  universalModal.value.title = title;
  universalModal.value.visible = true;
}

export { universalModal, openUniversalModal };