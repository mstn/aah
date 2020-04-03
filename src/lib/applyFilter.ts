

// {
//   "id": "a63b7fc3-c53a-46c9-b5ff-828cac9e3e57",
//   "kind": "market",
//   "name": "Sit unde atque numquam et quia unde.",
//   "address": "64 Asha Roads\nLake Narciso, MO 35663-0087",
//   "phone": "837-517-4727",
//   "email": "Bradly.Gerhold@Kling.io",
//   "notes": "porro sapiente porro est occaecati labore voluptates quas ut dolorem quae asperiores est repellendus molestiae vel sequi cupiditate earum vel temporibus odio et aut repudiandae commodi soluta sunt necessitatibus et harum ex doloribus quis omnis ut dolorem est voluptatem ipsam iusto non sint quia est ut rerum omnis est rerum molestiae labore aut voluptatibus ab dolores itaque debitis eos sunt omnis aut molestiae quaerat fugit corporis animi quidem qui et illum voluptas molestiae asperiores illum ut omnis velit sunt quas est adipisci expedita velit blanditiis quis rem placeat veritatis et sed provident quidem qui autem odit voluptates labore at inventore consectetur distinctio natus culpa sapiente culpa molestiae et tempore facere et omnis voluptatem vel veniam porro velit consequatur saepe aliquid nemo ratione facere nulla repudiandae similique aliquid et dicta qui similique possimus esse et quia labore exercitationem unde maiores accusantium nihil voluptatem sed ducimus consequuntur sunt facilis beatae beatae voluptatibus molestias quaerat quod libero asperiores ducimus magni qui qui alias est et ea necessitatibus fugiat beatae sit cumque corporis ut deleniti aperiam non quos incidunt voluptas et rerum recusandae consequatur repudiandae eaque eius soluta placeat perspiciatis dolorem nobis aut est aut illum at commodi et occaecati sed ducimus qui doloremque et debitis voluptatum consequatur molestiae corporis soluta officiis consequatur qui voluptatum atque dolorem nulla totam praesentium aut sit totam porro possimus veritatis illo et laborum quis assumenda repellendus similique sed neque accusantium qui consequatur et deserunt impedit voluptatem est ut eum sint consequatur nemo tempore nostrum tenetur in velit quod quod molestias occaecati sit doloribus tenetur eligendi qui possimus alias eum molestias amet repudiandae aut est nam pariatur praesentium recusandae repellat suscipit rerum velit quos ut nihil iure quis veniam molestiae adipisci consequuntur et dolorem incidunt accusamus repellendus minus dolorem explicabo voluptatem voluptas facere dolor et est hic labore suscipit",
//   "isLocalDeliveryAvaiable": false
//  },

const isLike = (a: string, b: string) => {
  const re = new RegExp(b, 'ig');
  return re.test(a);
}

const applyFilter = (companies, currentPage, search) => {
  const filteredCompanies = companies.filter( 
    company => isLike(company.address, search) || isLike(company.name, search)
  );

  return {
    companies: filteredCompanies.slice((currentPage-1)*10, (currentPage-1)*10 + 10),
    totalCount: filteredCompanies.length,
  }
}

export default applyFilter;