import React from "react";
import { NavLink  } from "react-router-dom";

export default function Header() {
  return (
		<header>
			<nav className="navbar is-primary">
				<div className="navbar-brand">
					<NavLink className="navbar-item" to="/">
						<img  className="brand-image" src="/images/swordpvper.png" alt="swords" />
						<span className="brand-first">P</span>
						<span>v</span>
						<span className="brand-second">P</span>
						<span>er</span>
					</NavLink>
				</div>
			</nav>
		</header>
	);
}
