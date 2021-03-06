---
date: '2019-11-06 16:10'
path: /cara-menyembunyikan-folders-dan-files-di-VS-Code
thumbnail: /assets/copy-of-copy-of-learn.png
tags:
  - Settingan VS Code
label: Linux
author: Kris
---
Sudah setahun terakhir ini saya fokus menggunakan text editor VS Code.

Dari sekian banyak fitur yang keren di VS Code, ada sedikit masalah yang mungkin membingungkan untuk sebagian developer termasuk saya sendiri. 

Masalahnya pada saat ada file atau forder yang digenerate secara otomatis oleh bahasa pemograman, framework atau oleh VS Code sendiri.

Sebagai contoh saya perlihatkan project Python saya, dibawah ini adalah contoh file yang digenerate oleh python.

```
Handler
  __pycache__
  Users
    __pycache__
    __init__.py
    __init__.pyc
main.py
main.pyc
```

File `__pycache__`,`__init__.py` , `__init__.pyc` sebenarnya tidak diperlukan oleh developer. File-file ini justru membuat direktori project menjadi terlihat berantakan dan membingungkan. 

Untuk menyembunyikan nya, kamu perlu mengedit file `setting.json` pada VS Code. dan menambahkan settingan ini didalam `files.exclude`.

```
"**/*.pyc": {"when": "$(basename).py"}, 
"**/__pycache__": true,
"**/__init__.py": true
```

default settingannya biasanya seperti ini

```
"files.exclude": {
  "**/.git": true,
  "**/.svn": true,
  "**/.hg": true,
  "**/CVS": true,
  "**/.DS_Store": true
},
```

sehingga akan terlihat seperti ini. (sesudah di edit)

```
"files.exclude": {
  "**/.git": true,
  "**/.svn": true,
  "**/.hg": true,
  "**/CVS": true,
  "**/.DS_Store": true,
  "**/*.pyc": {"when": "$(basename).py"}, 
  "**/__pycache__": true,
  "**/__init__.py": true
}
```

Save dan lihat, direktori project jadi lebih bersih tanpa terganggu dengan file-file yang tidak kamu butuhkan.

Langkah di atas tidak hanya berlaku di Python saja, tapi juga pada environment pemograman lainnya. tinggal sesuaikan saja file mana yang mau disembunyikan.
