export default defineEventHandler((event) => {
    return {
      api: 'works ' + new Date(),
    };
  });
  