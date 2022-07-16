const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-12 h-32">
      <div className="max-w-5xl mx-auto flex justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="/master-muntazir-icon.png"
            alt="React Bricks"
            className="w-8"
          />
          <div className="uppercase text-sm tracking-wider">Master Muntazir </div>
        </div>
        <div className="text-gray-500 text-sm">
            ©️ 2022 All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
