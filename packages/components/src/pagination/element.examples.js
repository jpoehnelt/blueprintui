export const metadata = {
  name: 'pagination',
  elements: ['bp-pagination']
};

export function example() {
  return /* html */`
    <bp-pagination aria-label="pagination">
      <bp-button-icon slot="first"></bp-button-icon>
      <bp-button-icon slot="prev"></bp-button-icon>
      <bp-field novalidate>
        <bp-input type="number" value="1" size="2" min="1" max="99" aria-label="current page"></bp-input>
        <bp-field-message>/ 3</bp-field-message>
      </bp-field>
      <bp-button-icon slot="next"></bp-button-icon>
      <bp-button-icon slot="last"></bp-button-icon>
    </bp-pagination>
  `;
};

export function basic() {
  return /* html */`
    <script type="module">
      import '@blueprintui/components/include/pagination.js';
    </script>

    <bp-pagination aria-label="pagination">
      <bp-button-icon slot="prev"></bp-button-icon>
      <bp-button-icon slot="next"></bp-button-icon>
    </bp-pagination>
  `;
};

export function basicPaginationNumber() {
  return /* html */`
    <bp-pagination aria-label="pagination">
      <bp-button-icon slot="prev"></bp-button-icon>
      <span aria-label="current page">1 / 3</span>
      <bp-button-icon slot="next"></bp-button-icon>
    </bp-pagination>
  `;
};

export function firstAndLast() {
  return /* html */`
    <bp-pagination aria-label="pagination">
      <bp-button-icon slot="first"></bp-button-icon>
      <bp-button-icon slot="prev"></bp-button-icon>
      <span aria-label="current page">1 / 3</span>
      <bp-button-icon slot="next"></bp-button-icon>
      <bp-button-icon slot="last"></bp-button-icon>
    </bp-pagination>
  `;
};

export function input() {
  return /* html */`
    <script type="module">
      import '@blueprintui/components/include/pagination.js';
    </script>
    <bp-pagination-input name="pagination" value="1" max="500" size="10" size-options="[10, 50, 100]"></bp-pagination-input>
  `;
}

export function inputInteractive() {
  return /* html */`
    <form id="pagination-form" bp-layout="block gap:md">
      <bp-pagination-input name="pagination" value="1" max="500" size="10" size-options="[10, 50, 100]"></bp-pagination-input>
      <bp-button type="submit" action="outline">Submit <span>1</span></bp-button>
    </form>
    <script type="module">
      import '@blueprintui/components/include/button.js';
      import '@blueprintui/components/include/pagination.js';
      const form = document.querySelector('#pagination-form');
      const pagination = document.querySelector('#pagination-form bp-pagination-input');
      pagination.addEventListener('change', (e) => document.querySelector('#pagination-form span').innerHTML = e.target.value);
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('submit', Object.fromEntries(new FormData(form)));
      });
    </script>
  `;
}
