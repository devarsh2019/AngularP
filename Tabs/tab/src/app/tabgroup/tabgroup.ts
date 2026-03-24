import { Component, ContentChildren, QueryList } from '@angular/core';
import { Tab } from './tab/tab';

@Component({
  selector: 'app-tabgroup',
  standalone: false,
  templateUrl: './tabgroup.html',
  styleUrl: './tabgroup.scss',
})
export class Tabgroup {
  @ContentChildren(Tab) tabs!: QueryList<Tab>;

  visibleTabs: Tab[] = [];

  ngAfterContentInit(): void {
    this.visibleTabs = this.tabs.filter(tab => !!tab.title?.trim());

    if (this.visibleTabs.length > 0) {
      this.selectTab(this.visibleTabs[0]);
    }
  }

  selectTab(selectedTab: Tab): void {
    this.visibleTabs.forEach(tab => {
      tab.active = false;
    });

    selectedTab.active = true;
  }
}
