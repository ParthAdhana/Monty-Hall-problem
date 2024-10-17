# Monty Hall Problem Simulation

![Monty Hall Problem](https://miro.medium.com/v2/resize:fit:720/format:webp/1*6dM33P7b4qm25XsxqDZ6qQ.png)

A JavaScript simulation of the Monty Hall problem, demonstrating the counterintuitive nature of probability in certain scenarios. This project provides insights into why switching doors increases the chances of winning in the classic game show scenario.

## Table of Contents

- [Monty Hall Problem Simulation](#monty-hall-problem-simulation)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Problem Description](#problem-description)
  - [How It Works](#how-it-works)

## Introduction

The Monty Hall problem is a famous probability puzzle based on the game show *Let's Make a Deal*. It reveals how human intuition about probability can often be misleading. This simulation runs multiple trials to statistically demonstrate the outcomes of sticking with the initial choice versus switching doors.

## Problem Description

- **Setup**: There are three doors. Behind one door is a prize (e.g., a car), and behind the other two are goats.
- **Gameplay**:
  1. A contestant selects one door (`userChoice`).
  2. The host, who knows what's behind the doors, opens one of the remaining doors that does **not** have the prize (`winningDoor`) and is not the contestant's choice.
  3. The contestant is offered the option to stick with their original choice or switch to the other unopened door.
- **Objective**: Determine whether it's statistically advantageous to switch doors.

## How It Works

The simulation runs a specified number of trials, randomly assigning the prize and the contestant's initial choice each time. It then records the outcomes based on whether the contestant sticks with their initial choice or switches after the host opens a door.


