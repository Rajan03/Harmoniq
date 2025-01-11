const category_root = "/api/GlobalCodeCategory";
export const endpoints = {
  getGlobalCodes: () => `${category_root}/GetGlobalCodes`,
  createGlobalCode: () => `${category_root}/GetGlobalCodes`,
  updateGlobalCode: (id: string) => `${category_root}/GetGlobalCodes/${id}`,
  deleteGlobalCode: (id: string) => `${category_root}/GetGlobalCodes/${id}`,

  getGlobalCodesCategories: () => `${category_root}/GetGlobalCodeCategories`,
};
