<template>
  <div class="bg-slate-50 text-slate-900">
    <section class="w-full px-4 py-8 lg:ml-64 lg:w-[calc(100%-16rem)] lg:px-8">
      <div class="mx-auto max-w-7xl">
        <!-- Filters & Actions Section -->
        <div class="bg-white rounded-2xl p-6 shadow-[0_20px_25px_-5px_rgba(14,165,233,0.05)] border border-slate-100 mb-8">
          <div class="flex flex-col md:flex-row md:items-end gap-6">
            <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="text-label-sm font-label-sm text-slate-500 ml-1">Pilih Jadwal Ujian</label>
                <div class="relative">
                  <select
                    class="w-full pl-4 pr-10 py-3 bg-surface border border-slate-200 rounded-xl text-slate-700 appearance-none focus:border-primary-container focus:ring-4 focus:ring-primary-container/10 transition-all font-body-md text-body-md">
                    <option>Ujian Tengah Semester Ganjil 2023/2024</option>
                    <option>Ujian Akhir Semester Ganjil 2023/2024</option>
                    <option>Try Out Nasional Gelombang 1</option>
                  </select>
                  <span
                    class="material-symbols-outlined absolute right-3 top-3.5 text-slate-400 pointer-events-none"
                    data-icon="expand_more">expand_more</span>
                </div>
              </div>
              <div class="space-y-2">
                <label class="text-label-sm font-label-sm text-slate-500 ml-1">Pilih Kelas</label>
                <div class="relative">
                  <select
                    class="w-full pl-4 pr-10 py-3 bg-surface border border-slate-200 rounded-xl text-slate-700 appearance-none focus:border-primary-container focus:ring-4 focus:ring-primary-container/10 transition-all font-body-md text-body-md">
                    <option>Semua Kelas</option>
                    <option>X - IPA 1</option>
                    <option>X - IPA 2</option>
                    <option>XI - IPS 1</option>
                  </select>
                  <span
                    class="material-symbols-outlined absolute right-3 top-3.5 text-slate-400 pointer-events-none"
                    data-icon="expand_more">expand_more</span>
                </div>
              </div>
            </div>
            <div class="flex shrink-0">
              <button
                class="bg-secondary-container text-on-secondary-container px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-secondary-container/20 transition-all active:scale-95">
                <span class="material-symbols-outlined" data-icon="file_download">file_download</span>
                <span>Export ke Excel</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Dashboard Stats Summary (Bento-style snippet) -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600">
              <span class="material-symbols-outlined" data-icon="person">person</span>
            </div>
            <div>
              <p class="text-label-sm text-slate-500">Total Siswa</p>
              <p class="text-h3 font-h3 text-slate-900">1,240</p>
            </div>
          </div>
          <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <span class="material-symbols-outlined" data-icon="check_circle">check_circle</span>
            </div>
            <div>
              <p class="text-label-sm text-slate-500">Lulus</p>
              <p class="text-h3 font-h3 text-slate-900">1,182</p>
            </div>
          </div>
          <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600">
              <span class="material-symbols-outlined" data-icon="cancel">cancel</span>
            </div>
            <div>
              <p class="text-label-sm text-slate-500">Tidak Lulus</p>
              <p class="text-h3 font-h3 text-slate-900">58</p>
            </div>
          </div>
          <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
              <span class="material-symbols-outlined" data-icon="avg_time">avg_time</span>
            </div>
            <div>
              <p class="text-label-sm text-slate-500">Rata-rata Nilai</p>
              <p class="text-h3 font-h3 text-slate-900">84.5</p>
            </div>
          </div>
        </div>

        <!-- Results Table Section -->
        <div
          class="bg-white rounded-3xl border border-slate-100 shadow-[0_20px_50px_rgba(0,101,145,0.03)] overflow-hidden">
          <div class="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
            <h2 class="text-h3 font-h3 text-slate-900">Daftar Hasil Ujian</h2>
            <div class="flex items-center gap-2 text-slate-500 text-sm">
              <span>Menampilkan 1 - 10 dari 1,240 siswa</span>
            </div>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left">
              <thead class="bg-slate-50/50">
                <tr>
                  <th
                    class="px-8 py-4 text-label-sm font-label-sm text-slate-500 uppercase tracking-wider">Nama Siswa</th>
                  <th
                    class="px-8 py-4 text-label-sm font-label-sm text-slate-500 uppercase tracking-wider">Kelas</th>
                  <th
                    class="px-8 py-4 text-label-sm font-label-sm text-slate-500 uppercase tracking-wider">Nilai Akhir</th>
                  <th
                    class="px-8 py-4 text-label-sm font-label-sm text-slate-500 uppercase tracking-wider">Status</th>
                  <th
                    class="px-8 py-4 text-label-sm font-label-sm text-slate-500 uppercase tracking-wider text-right">Aksi</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50/50 transition-colors group">
                  <td class="px-8 py-5">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm">AS</div>
                      <div>
                        <p class="font-bold text-slate-900">Ahmad Subarjo</p>
                        <p class="text-xs text-slate-500">NISN: 009823122</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-8 py-5">
                    <span
                      class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-label-sm font-label-sm">X - IPA 1</span>
                  </td>
                  <td class="px-8 py-5">
                    <p class="text-h3 font-h3 text-sky-600">92.5</p>
                  </td>
                  <td class="px-8 py-5">
                    <span
                      class="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg text-label-sm font-bold">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Lulus
                    </span>
                  </td>
                  <td class="px-8 py-5 text-right">
                    <button
                      class="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-xl text-label-sm font-bold hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 transition-all active:scale-95">
                      Detail
                    </button>
                  </td>
                </tr>
                <tr class="hover:bg-slate-50/50 transition-colors group">
                  <td class="px-8 py-5">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-sm">BR</div>
                      <div>
                        <p class="font-bold text-slate-900">Budi Raharjo</p>
                        <p class="text-xs text-slate-500">NISN: 009823145</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-8 py-5">
                    <span
                      class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-label-sm font-label-sm">X - IPA 1</span>
                  </td>
                  <td class="px-8 py-5">
                    <p class="text-h3 font-h3 text-sky-600">88.0</p>
                  </td>
                  <td class="px-8 py-5">
                    <span
                      class="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg text-label-sm font-bold">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Lulus
                    </span>
                  </td>
                  <td class="px-8 py-5 text-right">
                    <button
                      class="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-xl text-label-sm font-bold hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 transition-all active:scale-95">
                      Detail
                    </button>
                  </td>
                </tr>
                <tr class="hover:bg-slate-50/50 transition-colors group">
                  <td class="px-8 py-5">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-10 h-10 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm">CH</div>
                      <div>
                        <p class="font-bold text-slate-900">Citra Handayani</p>
                        <p class="text-xs text-slate-500">NISN: 009823189</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-8 py-5">
                    <span
                      class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-label-sm font-label-sm">X - IPA 2</span>
                  </td>
                  <td class="px-8 py-5">
                    <p class="text-h3 font-h3 text-rose-500">62.4</p>
                  </td>
                  <td class="px-8 py-5">
                    <span
                      class="inline-flex items-center gap-1.5 bg-rose-50 text-rose-700 px-3 py-1.5 rounded-lg text-label-sm font-bold">
                      <span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                      Tidak Lulus
                    </span>
                  </td>
                  <td class="px-8 py-5 text-right">
                    <button
                      class="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-xl text-label-sm font-bold hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 transition-all active:scale-95">
                      Detail
                    </button>
                  </td>
                </tr>
                <tr class="hover:bg-slate-50/50 transition-colors group">
                  <td class="px-8 py-5">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-10 h-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">DW</div>
                      <div>
                        <p class="font-bold text-slate-900">Dedi Wahyudi</p>
                        <p class="text-xs text-slate-500">NISN: 009823201</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-8 py-5">
                    <span
                      class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-label-sm font-label-sm">XI - IPS 1</span>
                  </td>
                  <td class="px-8 py-5">
                    <p class="text-h3 font-h3 text-sky-600">75.0</p>
                  </td>
                  <td class="px-8 py-5">
                    <span
                      class="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg text-label-sm font-bold">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Lulus
                    </span>
                  </td>
                  <td class="px-8 py-5 text-right">
                    <button
                      class="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-xl text-label-sm font-bold hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 transition-all active:scale-95">
                      Detail
                    </button>
                  </td>
                </tr>
                <tr class="hover:bg-slate-50/50 transition-colors group">
                  <td class="px-8 py-5">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-10 h-10 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-sm">EN</div>
                      <div>
                        <p class="font-bold text-slate-900">Eka Ningsih</p>
                        <p class="text-xs text-slate-500">NISN: 009823255</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-8 py-5">
                    <span
                      class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-label-sm font-label-sm">X - IPA 1</span>
                  </td>
                  <td class="px-8 py-5">
                    <p class="text-h3 font-h3 text-sky-600">95.8</p>
                  </td>
                  <td class="px-8 py-5">
                    <span
                      class="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg text-label-sm font-bold">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Lulus
                    </span>
                  </td>
                  <td class="px-8 py-5 text-right">
                    <button
                      class="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-xl text-label-sm font-bold hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200 transition-all active:scale-95">
                      Detail
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- Pagination -->
          <div class="px-8 py-6 bg-slate-50/30 border-t border-slate-100 flex justify-between items-center">
            <button class="flex items-center gap-2 text-slate-400 font-bold hover:text-sky-600 transition-colors">
              <span class="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
              Sebelumnya
            </button>
            <div class="flex gap-1">
              <button class="w-10 h-10 rounded-lg bg-sky-600 text-white font-bold">1</button>
              <button class="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 font-bold hover:bg-sky-50 transition-colors">2</button>
              <button class="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 font-bold hover:bg-sky-50 transition-colors">3</button>
              <span class="w-10 h-10 flex items-center justify-center text-slate-400">...</span>
              <button class="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600 font-bold hover:bg-sky-50 transition-colors">124</button>
            </div>
            <button class="flex items-center gap-2 text-slate-600 font-bold hover:text-sky-600 transition-colors">
              Selanjutnya
              <span class="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
            </button>
          </div>
        </div>

        <!-- Footer Decoration (Optional visual flair) -->
        <div class="mt-12 flex justify-center opacity-30">
          <div class="w-24 h-1 bg-gradient-to-r from-transparent via-sky-300 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Static view for Nilai page. Data and interactions can be added later.
</script>
