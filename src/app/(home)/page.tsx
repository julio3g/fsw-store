import { prismaClient } from '@/lib/prisma'
import { Categories } from './components/categories'
import { ProductList } from './components/productList'
import { PromotionBanner } from './components/promotionBanner'
import { SectionTitle } from './components/sectionTitle'

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  })

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'keyboards',
      },
    },
  })
  return (
    <div className="">
      <PromotionBanner
        src="/banner-home-01.png"
        alt="Até 55% de desconto esse mês!"
      />
      <div className="mt-8 px-5">
        <Categories />
      </div>
      <div className="mt-8">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>
      <PromotionBanner
        src="/banner-home-02.png"
        alt="Até 55% de desconto em mouses!"
      />
      <div className="mt-8">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>
      <PromotionBanner
        src="/banner-home-03.png"
        alt="Até 55% de desconto em mouses!"
      />
    </div>
  )
}
