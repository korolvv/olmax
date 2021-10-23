export default async function ({ $axios, app, store }) {

        const rec = await $axios.get(process.env.apiUrl+"/data/api/data");
        store.commit("setData", rec.data)
  }