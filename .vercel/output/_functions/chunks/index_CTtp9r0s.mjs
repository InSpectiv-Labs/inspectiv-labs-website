import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { r as $$Image, t as getImage } from "./_astro_assets_BDHaIWix.mjs";
import { _ as maybeRenderHead, c as renderComponent, g as renderTemplate, y as addAttribute } from "./jsx-runtime_D93Y_ZqC.mjs";
import { t as createComponent } from "./compiler_D6EN8nQM.mjs";
import { t as $$BaseLayout } from "./BaseLayout_Fm_IbPy_.mjs";
import { t as supabase } from "./supabase_CRd9FTIo.mjs";
import { n as ind_energy_default, r as ind_mining_default, t as scan_sat_default } from "./scan-sat_BpDx8hOH.mjs";
import { createContext, forwardRef, useCallback, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { clsx } from "clsx";
import { jsx, jsxs } from "react/jsx-runtime";
import * as MapLibreGL from "maplibre-gl";
import "react-dom";
import { Loader2, Locate, Maximize, Minus, Plus } from "lucide-react";
import { twMerge } from "tailwind-merge";
//#region src/components/react/HeroCarousel.tsx
function HeroCarousel({ images }) {
	const slides = [
		{
			image: images[0] || "",
			title: "Precision Inspection & Risk Intelligence for Industry",
			subtitle: "Ground-truth risk intelligence mapped, verified, and automated"
		},
		{
			image: images[1] || "",
			title: "Monitor Critical Infrastructure With Confidence",
			subtitle: "Millimeter-scale displacement monitoring for dams, slopes, and civil engineering"
		},
		{
			image: images[2] || "",
			title: "Global Asset Protection & Financial De-Risking",
			subtitle: "Independent verification for massive capital projects and port facilities"
		}
	];
	const [currentSlide, setCurrentSlide] = useState(0);
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 6e3);
		return () => clearInterval(timer);
	}, []);
	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};
	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "relative w-full h-full",
		children: [
			slides.map((slide, index) => /* @__PURE__ */ jsxs("div", {
				className: `absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-0" : "opacity-0 pointer-events-none"}`,
				children: [/* @__PURE__ */ jsx("img", {
					loading: index === 0 ? "eager" : "lazy",
					fetchPriority: index === 0 ? "high" : "low",
					src: slide.image,
					alt: slide.title,
					className: "w-full h-full object-cover"
				}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/40" })]
			}, index)),
			/* @__PURE__ */ jsx("button", {
				onClick: prevSlide,
				className: "absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white transition-colors cursor-pointer",
				"aria-label": "Previous slide",
				children: /* @__PURE__ */ jsx("i", { className: "bx bx-chevron-left text-5xl drop-shadow-md" })
			}),
			/* @__PURE__ */ jsx("button", {
				onClick: nextSlide,
				className: "absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white transition-colors cursor-pointer",
				"aria-label": "Next slide",
				children: /* @__PURE__ */ jsx("i", { className: "bx bx-chevron-right text-5xl drop-shadow-md" })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 w-full h-full flex flex-col justify-end text-left px-6 pb-20 max-w-[90vw] mx-auto",
				children: [
					/* @__PURE__ */ jsx("h1", {
						className: "text-4xl md:text-5xl font-light tracking-wide mb-2 text-white uppercase drop-shadow-sm transition-all duration-700 transform",
						children: "InSpectiv Labs"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "min-h-[120px] md:min-h-[100px] flex items-start justify-start mb-4",
						children: /* @__PURE__ */ jsx("h2", {
							className: "text-2xl md:text-4xl font-light leading-tight text-white drop-shadow-md animate-fade-in-up",
							children: slides[currentSlide].title
						}, currentSlide)
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex flex-col sm:flex-row gap-4 mb-8",
						children: /* @__PURE__ */ jsx("a", {
							href: "#industries",
							className: "px-8 py-3 bg-[#2563eb] text-white text-sm uppercase tracking-wider font-semibold hover:bg-[#1d4ed8] transition-colors shadow-sm inline-block text-center",
							children: "EXPLORE SOLUTIONS"
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex gap-3",
						children: slides.map((_, index) => /* @__PURE__ */ jsx("button", {
							onClick: () => setCurrentSlide(index),
							className: `w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"}`,
							"aria-label": `Go to slide ${index + 1}`
						}, index))
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce pointer-events-none",
				children: /* @__PURE__ */ jsx("i", { className: "bx bx-chevron-down text-4xl" })
			}),
			/* @__PURE__ */ jsx("style", { children: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      ` })
		]
	});
}
//#endregion
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/map.tsx
if (typeof window !== "undefined" && !MapLibreGL.getWorkerUrl()) MapLibreGL.setWorkerUrl(`https://unpkg.com/maplibre-gl@${MapLibreGL.getVersion()}/dist/maplibre-gl-worker.mjs`);
var defaultStyles = {
	dark: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
	light: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
};
var blankMapStyle = {
	version: 8,
	sources: {},
	layers: [{
		id: "background",
		type: "background",
		paint: { "background-color": "rgba(0, 0, 0, 0)" }
	}]
};
function useStableValue(value) {
	const key = useMemo(() => JSON.stringify(value) ?? "", [value]);
	return useMemo(() => value, [key]);
}
function getDocumentTheme() {
	if (typeof document === "undefined") return null;
	const root = document.documentElement;
	if (root.classList.contains("dark")) return "dark";
	if (root.classList.contains("light")) return "light";
	const dataTheme = root.dataset.theme;
	if (dataTheme === "dark" || dataTheme === "light") return dataTheme;
	return null;
}
function getSystemTheme() {
	if (typeof window === "undefined") return "light";
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function useResolvedTheme(themeProp) {
	const [detectedTheme, setDetectedTheme] = useState(() => getDocumentTheme() ?? getSystemTheme());
	useEffect(() => {
		if (themeProp) return;
		const observer = new MutationObserver(() => {
			const docTheme = getDocumentTheme();
			if (docTheme) setDetectedTheme(docTheme);
		});
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class", "data-theme"]
		});
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleSystemChange = (e) => {
			if (!getDocumentTheme()) setDetectedTheme(e.matches ? "dark" : "light");
		};
		mediaQuery.addEventListener("change", handleSystemChange);
		return () => {
			observer.disconnect();
			mediaQuery.removeEventListener("change", handleSystemChange);
		};
	}, [themeProp]);
	return themeProp ?? detectedTheme;
}
var MapContext = createContext(null);
function useMap() {
	const context = useContext(MapContext);
	if (!context) throw new Error("useMap must be used within a Map component");
	return context;
}
function DefaultLoader() {
	return /* @__PURE__ */ jsx("div", {
		className: "bg-background/50 absolute inset-0 z-10 flex items-center justify-center backdrop-blur-xs",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex gap-1",
			children: [
				/* @__PURE__ */ jsx("span", { className: "bg-muted-foreground/60 size-1.5 animate-pulse rounded-full" }),
				/* @__PURE__ */ jsx("span", { className: "bg-muted-foreground/60 size-1.5 animate-pulse rounded-full [animation-delay:150ms]" }),
				/* @__PURE__ */ jsx("span", { className: "bg-muted-foreground/60 size-1.5 animate-pulse rounded-full [animation-delay:300ms]" })
			]
		})
	});
}
function getViewport(map) {
	const center = map.getCenter();
	return {
		center: [center.lng, center.lat],
		zoom: map.getZoom(),
		bearing: map.getBearing(),
		pitch: map.getPitch()
	};
}
var Map = forwardRef(function Map({ children, className, theme: themeProp, styles, blank = false, projection, viewport, onViewportChange, loading = false, ...props }, ref) {
	const containerRef = useRef(null);
	const [mapInstance, setMapInstance] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isStyleLoaded, setIsStyleLoaded] = useState(false);
	const [pendingStyle, setPendingStyle] = useState(null);
	const currentStyleRef = useRef(null);
	const styleSwapInFlightRef = useRef(false);
	const internalUpdateRef = useRef(false);
	const resolvedTheme = useResolvedTheme(themeProp);
	const isControlled = viewport !== void 0 && onViewportChange !== void 0;
	const onViewportChangeRef = useRef(onViewportChange);
	onViewportChangeRef.current = onViewportChange;
	const stableStyles = useStableValue(styles);
	const mapStyles = useMemo(() => {
		if (stableStyles) return {
			dark: stableStyles.dark ?? defaultStyles.dark,
			light: stableStyles.light ?? defaultStyles.light
		};
		if (blank) return {
			dark: blankMapStyle,
			light: blankMapStyle
		};
		return defaultStyles;
	}, [stableStyles, blank]);
	useImperativeHandle(ref, () => mapInstance, [mapInstance]);
	useEffect(() => {
		if (!containerRef.current) return;
		const initialStyle = resolvedTheme === "dark" ? mapStyles.dark : mapStyles.light;
		currentStyleRef.current = initialStyle;
		const map = new MapLibreGL.Map({
			container: containerRef.current,
			style: initialStyle,
			renderWorldCopies: false,
			attributionControl: { compact: true },
			...props,
			...viewport
		});
		const styleLoadHandler = () => {
			styleSwapInFlightRef.current = false;
			setIsStyleLoaded(true);
		};
		const loadHandler = () => setIsLoaded(true);
		const handleMove = () => {
			if (internalUpdateRef.current) return;
			onViewportChangeRef.current?.(getViewport(map));
		};
		map.on("load", loadHandler);
		map.on("style.load", styleLoadHandler);
		map.on("move", handleMove);
		setMapInstance(map);
		return () => {
			map.off("load", loadHandler);
			map.off("style.load", styleLoadHandler);
			map.off("move", handleMove);
			map.remove();
			setIsLoaded(false);
			setIsStyleLoaded(false);
			setMapInstance(null);
		};
	}, []);
	useEffect(() => {
		if (!mapInstance || !isControlled || !viewport) return;
		if (mapInstance.isMoving()) return;
		const current = getViewport(mapInstance);
		const next = {
			center: viewport.center ?? current.center,
			zoom: viewport.zoom ?? current.zoom,
			bearing: viewport.bearing ?? current.bearing,
			pitch: viewport.pitch ?? current.pitch
		};
		if (next.center[0] === current.center[0] && next.center[1] === current.center[1] && next.zoom === current.zoom && next.bearing === current.bearing && next.pitch === current.pitch) return;
		internalUpdateRef.current = true;
		mapInstance.jumpTo(next);
		internalUpdateRef.current = false;
	}, [
		mapInstance,
		isControlled,
		viewport
	]);
	useEffect(() => {
		if (!mapInstance || !resolvedTheme) return;
		const newStyle = resolvedTheme === "dark" ? mapStyles.dark : mapStyles.light;
		if (currentStyleRef.current === newStyle) return;
		currentStyleRef.current = newStyle;
		setIsStyleLoaded(false);
		setPendingStyle(newStyle);
	}, [
		mapInstance,
		resolvedTheme,
		mapStyles
	]);
	useEffect(() => {
		if (!mapInstance || !pendingStyle) return;
		setPendingStyle(null);
		styleSwapInFlightRef.current = true;
		mapInstance.setStyle(pendingStyle, { diff: false });
	}, [mapInstance, pendingStyle]);
	useEffect(() => {
		if (!mapInstance || !isStyleLoaded || !projection) return;
		if (styleSwapInFlightRef.current) return;
		mapInstance.setProjection(projection);
	}, [
		mapInstance,
		isStyleLoaded,
		projection
	]);
	const contextValue = useMemo(() => ({
		map: mapInstance,
		isLoaded: isLoaded && isStyleLoaded,
		resolvedTheme
	}), [
		mapInstance,
		isLoaded,
		isStyleLoaded,
		resolvedTheme
	]);
	return /* @__PURE__ */ jsx(MapContext.Provider, {
		value: contextValue,
		children: /* @__PURE__ */ jsxs("div", {
			ref: containerRef,
			className: cn("relative h-full w-full", className),
			children: [(!isLoaded || loading) && /* @__PURE__ */ jsx(DefaultLoader, {}), mapInstance && children]
		})
	});
});
var MarkerContext = createContext(null);
function MapMarker({ longitude, latitude, children, onClick, onMouseEnter, onMouseLeave, onDragStart, onDrag, onDragEnd, draggable = false, ...markerOptions }) {
	const { map } = useMap();
	const callbacksRef = useRef({
		onClick,
		onMouseEnter,
		onMouseLeave,
		onDragStart,
		onDrag,
		onDragEnd
	});
	callbacksRef.current = {
		onClick,
		onMouseEnter,
		onMouseLeave,
		onDragStart,
		onDrag,
		onDragEnd
	};
	const marker = useMemo(() => {
		const markerInstance = new MapLibreGL.Marker({
			...markerOptions,
			element: document.createElement("div"),
			draggable
		}).setLngLat([longitude, latitude]);
		const handleClick = (e) => callbacksRef.current.onClick?.(e);
		const handleMouseEnter = (e) => callbacksRef.current.onMouseEnter?.(e);
		const handleMouseLeave = (e) => callbacksRef.current.onMouseLeave?.(e);
		markerInstance.getElement()?.addEventListener("click", handleClick);
		markerInstance.getElement()?.addEventListener("mouseenter", handleMouseEnter);
		markerInstance.getElement()?.addEventListener("mouseleave", handleMouseLeave);
		const handleDragStart = () => {
			const lngLat = markerInstance.getLngLat();
			callbacksRef.current.onDragStart?.({
				lng: lngLat.lng,
				lat: lngLat.lat
			});
		};
		const handleDrag = () => {
			const lngLat = markerInstance.getLngLat();
			callbacksRef.current.onDrag?.({
				lng: lngLat.lng,
				lat: lngLat.lat
			});
		};
		const handleDragEnd = () => {
			const lngLat = markerInstance.getLngLat();
			callbacksRef.current.onDragEnd?.({
				lng: lngLat.lng,
				lat: lngLat.lat
			});
		};
		markerInstance.on("dragstart", handleDragStart);
		markerInstance.on("drag", handleDrag);
		markerInstance.on("dragend", handleDragEnd);
		return markerInstance;
	}, []);
	useEffect(() => {
		if (!map) return;
		marker.addTo(map);
		return () => {
			marker.remove();
		};
	}, [map]);
	const { offset, rotation, rotationAlignment, pitchAlignment } = markerOptions;
	useEffect(() => {
		const current = marker.getLngLat();
		if (current.lng !== longitude || current.lat !== latitude) marker.setLngLat([longitude, latitude]);
		if (marker.isDraggable() !== draggable) marker.setDraggable(draggable);
		const currentOffset = marker.getOffset();
		const newOffset = offset ?? [0, 0];
		const [newOffsetX, newOffsetY] = Array.isArray(newOffset) ? newOffset : [newOffset.x, newOffset.y];
		if (currentOffset.x !== newOffsetX || currentOffset.y !== newOffsetY) marker.setOffset(newOffset);
		if (marker.getRotation() !== (rotation ?? 0)) marker.setRotation(rotation ?? 0);
		if (marker.getRotationAlignment() !== (rotationAlignment ?? "auto")) marker.setRotationAlignment(rotationAlignment ?? "auto");
		if (marker.getPitchAlignment() !== (pitchAlignment ?? "auto")) marker.setPitchAlignment(pitchAlignment ?? "auto");
	}, [
		marker,
		longitude,
		latitude,
		draggable,
		offset,
		rotation,
		rotationAlignment,
		pitchAlignment
	]);
	return /* @__PURE__ */ jsx(MarkerContext.Provider, {
		value: {
			marker,
			map
		},
		children
	});
}
function MarkerLabel({ children, className, position = "top" }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn("absolute left-1/2 -translate-x-1/2 whitespace-nowrap", "text-foreground text-[10px] font-medium", {
			top: "bottom-full mb-1",
			bottom: "top-full mt-1"
		}[position], className),
		children
	});
}
var positionClasses = {
	"top-left": "top-2 left-2",
	"top-right": "top-2 right-2",
	"bottom-left": "bottom-2 left-2",
	"bottom-right": "bottom-10 right-2"
};
function ControlGroup({ children }) {
	return /* @__PURE__ */ jsx("div", {
		className: "border-border bg-background [&>button:not(:last-child)]:border-border flex flex-col overflow-hidden rounded-md border shadow-sm [&>button:not(:last-child)]:border-b",
		children
	});
}
function ControlButton({ onClick, label, children, disabled = false }) {
	return /* @__PURE__ */ jsx("button", {
		onClick,
		"aria-label": label,
		type: "button",
		className: cn("flex size-8 items-center justify-center transition-colors", "first:rounded-t-md last:rounded-b-md", "hover:bg-accent dark:hover:bg-accent/40", "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset", "disabled:pointer-events-none disabled:opacity-50"),
		disabled,
		children
	});
}
function MapControls({ position = "bottom-right", showZoom = true, showCompass = false, showLocate = false, showFullscreen = false, className, onLocate }) {
	const { map } = useMap();
	const [waitingForLocation, setWaitingForLocation] = useState(false);
	const handleZoomIn = useCallback(() => {
		map?.zoomTo(map.getZoom() + 1, { duration: 300 });
	}, [map]);
	const handleZoomOut = useCallback(() => {
		map?.zoomTo(map.getZoom() - 1, { duration: 300 });
	}, [map]);
	const handleResetBearing = useCallback(() => {
		map?.resetNorthPitch({ duration: 300 });
	}, [map]);
	const handleLocate = useCallback(() => {
		if (!("geolocation" in navigator)) return;
		setWaitingForLocation(true);
		navigator.geolocation.getCurrentPosition((pos) => {
			const coords = {
				longitude: pos.coords.longitude,
				latitude: pos.coords.latitude
			};
			map?.flyTo({
				center: [coords.longitude, coords.latitude],
				zoom: 14,
				duration: 1500
			});
			onLocate?.(coords);
			setWaitingForLocation(false);
		}, (error) => {
			console.error("Error getting location:", error);
			setWaitingForLocation(false);
		}, { timeout: 1e4 });
	}, [map, onLocate]);
	const handleFullscreen = useCallback(() => {
		const container = map?.getContainer();
		if (!container) return;
		if (document.fullscreenElement) document.exitFullscreen();
		else container.requestFullscreen();
	}, [map]);
	return /* @__PURE__ */ jsxs("div", {
		className: cn("absolute z-10 flex flex-col gap-1.5", positionClasses[position], className),
		children: [
			showZoom && /* @__PURE__ */ jsxs(ControlGroup, { children: [/* @__PURE__ */ jsx(ControlButton, {
				onClick: handleZoomIn,
				label: "Zoom in",
				children: /* @__PURE__ */ jsx(Plus, { className: "size-4" })
			}), /* @__PURE__ */ jsx(ControlButton, {
				onClick: handleZoomOut,
				label: "Zoom out",
				children: /* @__PURE__ */ jsx(Minus, { className: "size-4" })
			})] }),
			showCompass && /* @__PURE__ */ jsx(ControlGroup, { children: /* @__PURE__ */ jsx(CompassButton, { onClick: handleResetBearing }) }),
			showLocate && /* @__PURE__ */ jsx(ControlGroup, { children: /* @__PURE__ */ jsx(ControlButton, {
				onClick: handleLocate,
				label: "Find my location",
				disabled: waitingForLocation,
				children: waitingForLocation ? /* @__PURE__ */ jsx(Loader2, { className: "size-4 animate-spin" }) : /* @__PURE__ */ jsx(Locate, { className: "size-4" })
			}) }),
			showFullscreen && /* @__PURE__ */ jsx(ControlGroup, { children: /* @__PURE__ */ jsx(ControlButton, {
				onClick: handleFullscreen,
				label: "Toggle fullscreen",
				children: /* @__PURE__ */ jsx(Maximize, { className: "size-4" })
			}) })
		]
	});
}
function CompassButton({ onClick }) {
	const { map } = useMap();
	const compassRef = useRef(null);
	useEffect(() => {
		if (!map || !compassRef.current) return;
		const compass = compassRef.current;
		const updateRotation = () => {
			const bearing = map.getBearing();
			const pitch = map.getPitch();
			compass.style.transform = `rotateX(${pitch}deg) rotateZ(${-bearing}deg)`;
		};
		map.on("rotate", updateRotation);
		map.on("pitch", updateRotation);
		updateRotation();
		return () => {
			map.off("rotate", updateRotation);
			map.off("pitch", updateRotation);
		};
	}, [map]);
	return /* @__PURE__ */ jsx(ControlButton, {
		onClick,
		label: "Reset bearing to north",
		children: /* @__PURE__ */ jsxs("svg", {
			ref: compassRef,
			viewBox: "0 0 24 24",
			className: "size-5",
			style: { transformStyle: "preserve-3d" },
			children: [
				/* @__PURE__ */ jsx("path", {
					d: "M12 2L16 12H12V2Z",
					className: "fill-red-500"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M12 2L8 12H12V2Z",
					className: "fill-red-300"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M12 22L16 12H12V22Z",
					className: "fill-muted-foreground/60"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M12 22L8 12H12V22Z",
					className: "fill-muted-foreground/30"
				})
			]
		})
	});
}
//#endregion
//#region src/components/NetworkMap.tsx
var darkMapStyle = {
	version: 8,
	sources: { "carto-dark": {
		type: "raster",
		tiles: [
			"https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
			"https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
			"https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
			"https://d.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png"
		],
		tileSize: 256
	} },
	layers: [{
		id: "carto-dark-layer",
		type: "raster",
		source: "carto-dark",
		minzoom: 0,
		maxzoom: 22
	}]
};
function NetworkMap() {
	return /* @__PURE__ */ jsx("div", {
		className: "w-full h-full relative rounded-2xl overflow-hidden shadow-inner border border-gray-100",
		children: /* @__PURE__ */ jsxs(Map, {
			center: [78.4867, 17.385],
			zoom: 11,
			styles: darkMapStyle,
			children: [
				/* @__PURE__ */ jsx(MapControls, { position: "bottom-right" }),
				/* @__PURE__ */ jsx(MapMarker, {
					longitude: -74.006,
					latitude: 40.7128,
					color: "#1d4ed8",
					children: /* @__PURE__ */ jsx("div", {})
				}),
				/* @__PURE__ */ jsx(MapMarker, {
					longitude: -.1276,
					latitude: 51.5072,
					color: "#1d4ed8",
					children: /* @__PURE__ */ jsx("div", {})
				}),
				/* @__PURE__ */ jsx(MapMarker, {
					longitude: 139.6917,
					latitude: 35.6895,
					color: "#1d4ed8",
					children: /* @__PURE__ */ jsx("div", {})
				}),
				/* @__PURE__ */ jsx(MapMarker, {
					longitude: 78.4867,
					latitude: 17.385,
					color: "#1d4ed8",
					children: /* @__PURE__ */ jsx(MarkerLabel, { children: "Hyderabad, India" })
				}),
				/* @__PURE__ */ jsx(MapMarker, {
					longitude: 151.2093,
					latitude: -33.8688,
					color: "#1d4ed8",
					children: /* @__PURE__ */ jsx("div", {})
				}),
				/* @__PURE__ */ jsx(MapMarker, {
					longitude: -70.6693,
					latitude: -33.4489,
					color: "#1d4ed8",
					children: /* @__PURE__ */ jsx("div", {})
				}),
				/* @__PURE__ */ jsx(MapMarker, {
					longitude: 28.0473,
					latitude: -26.2041,
					color: "#1d4ed8",
					children: /* @__PURE__ */ jsx("div", {})
				})
			]
		})
	});
}
//#endregion
//#region src/data/caseStudies.ts
var caseStudies = [{
	id: "1",
	slug: "predictive-slope-failure-analysis",
	category: "MINING",
	cardTitle: "Predictive Slope Failure Analysis",
	cardSubtitle: "Retrospective InSAR Analysis of an Active Open-Cast Pit Wall Failure",
	cardDescription: "Following a major structural collapse at an open-cast quarry, InSpectiv Labs conducted a retrospective 12-month InSAR analysis. The radar data revealed widespread ground instability across the terrain, with localized high-velocity red hotspots developing months before physical failure occurred.",
	cardImage: "/images/case_study_1.webp",
	pageTitle: "Predictive Slope Failure Analysis",
	pageSubtitle: "Retrospective Sentinel-1 InSAR Evaluation of an Active Open-Cast Pit Wall Collapse",
	executiveSummary: "In 2025, a severe quarry wall collapse occurred at an active open-cast mining operation during routine drilling, burying equipment and personnel. InSpectiv Labs performed a retrospective 12-month SBAS InSAR analysis across a 5 sq km footprint leading up to the incident month. The satellite radar data confirmed that the site suffered from widespread, multi-hectare terrain instability, with critical high-velocity failure zones concentrating directly along the upper pit wall crest months prior to the collapse.",
	challenge: "Open-cast quarrying continuously alters slope geometry, stress distributions, and bench stability. Slope failures are rarely sudden; they stem from progressive internal stress buildup, bench weakening, and subtle surface displacement over time. Traditional physical inspection and localized survey tools often fail to cover broad, multi-hectare pit faces continuously, leaving slow-developing slope instabilities undetected until structural failure occurs.",
	methodology: {
		dataEngine: "Sentinel-1 C-band Synthetic Aperture Radar (SAR) imagery acquired over a 12-month timeframe (~5 sq km area).",
		processingTechnique: "Small Baseline Subset (SBAS) Interferometric Time-Series Analysis.",
		measurementPhysics: "Line-of-Sight (LOS) displacement tracking capable of measuring millimeter-scale surface movement.",
		analyticalFocus: "Mapping deformation trends, velocity changes, and high-risk spatial clustering along active pit slopes."
	},
	imagePlaceholder: {
		src: "/images/case_study_1.webp",
		caption: "Figure 1. SBAS InSAR Mean LOS Velocity map showing widespread terrain instability across the site, with concentrated high-velocity red failure hotspots along the active quarry wall crest prior to collapse."
	},
	technicalFindings: [{
		zoneClassification: "Critical Red Hotspots",
		observedSignal: "High negative LOS velocity / concentrated deep red clusters along pit crest (~50 sq m)",
		interpretation: "Point of maximum acceleration and slope failure. Serves as a clear, localized early warning indicator directly along the active excavation crest."
	}, {
		zoneClassification: "Widespread Site Instability",
		observedSignal: "Predominant yellow and orange grid patterns across the broader quarry area",
		interpretation: "Indicates that the majority of the surrounding site was undergoing progressive surface shift and escalating ground stress rather than remaining stable."
	}],
	businessImpact: [
		{
			title: "Predictive Lead-Time",
			description: "Demonstrates that satellite radar can identify subtle slope shifts and broad terrain stress months before physical collapse occurs."
		},
		{
			title: "Targeted Geotechnical Intervention",
			description: "Pinpoints exact high-risk slope sections to prioritize ground checks, instrumentation placement, and bench reinforcements."
		},
		{
			title: "Worker & Asset Protection",
			description: "Provides independent spatial intelligence to adjust excavation schedules and keep workers out of hazardous zones."
		}
	]
}, {
	id: "2",
	slug: "mine-deformation-baseline-assessment",
	category: "MINING",
	cardTitle: "Mine Deformation Baseline Assessment",
	cardSubtitle: "12-Month InSAR Ground Stability Assessment Over Active Mining Lease",
	cardDescription: "InSpectiv Labs executed a 12-month ground stability assessment over an active open-cast mine using Sentinel-1 SBAS InSAR. The study successfully flagged high-risk active subsidence (-10 to -16 mm/yr) adjacent to active pit faces while verifying overall lease stability.",
	cardImage: "/images/case_study_2.webp",
	pageTitle: "Mine Lease Deformation Baseline Assessment",
	pageSubtitle: "12-Month Sentinel-1 SBAS InSAR Monitoring over an Active Open-Cast Mining Operation",
	executiveSummary: "InSpectiv Labs completed a 12-month satellite-based ground deformation assessment over an active open-cast mining lease using Sentinel-1 SAR data processed with the SBAS InSAR technique. The assessment mapped overall lease stability, successfully pinpointed localized subsidence zones (-10 to -16 mm/yr) adjacent to active excavation, and differentiated mine-induced movement from off-site groundwater fluctuations.",
	challenge: "Open-cast mining continuously modifies slope geometry, bench configurations, and localized hydrogeology. These operational changes induce gradual ground shifts long before visible cracks appear. Mine operators require continuous, lease-wide deformation screening without incurring the extreme capital expenditure of dense ground-based hardware sensor networks.",
	methodology: {
		dataEngine: "Sentinel-1A/B C-band SAR (IW Mode, Ascending Pass).",
		processingTechnique: "SBAS (Small Baseline Subset) Interferometric Time-Series Analysis with atmospheric error mitigation.",
		measurementPhysics: "Line-of-Sight (LOS) velocity mapping ranging from -16 mm/yr to +13 mm/yr.",
		analyticalFocus: "12-Month Continuous Assessment Window."
	},
	imagePlaceholder: {
		src: "/images/case_study_2.webp",
		caption: "Figure 1. Average Line-of-Sight (LOS) ground velocity derived from Sentinel-1 SBAS InSAR processing, highlighting active high-risk deformation zones inside the lease boundary."
	},
	technicalFindings: [
		{
			zoneClassification: "High-Risk Zone",
			observedSignal: "-10 to -16 mm/yr",
			interpretation: "Active subsidence adjacent to active excavation. Immediate field verification and close monitoring required."
		},
		{
			zoneClassification: "Moderate-Risk Zone",
			observedSignal: "-5 to -10 mm/yr",
			interpretation: "Potential slope/ground settlement. Recommended for ongoing trend tracking across future observation cycles."
		},
		{
			zoneClassification: "General Mine Lease",
			observedSignal: "-5 to +13 mm/yr",
			interpretation: "Stable ground. No evidence of widespread or accelerating structural deformation detected."
		},
		{
			zoneClassification: "Off-Site Anomalies",
			observedSignal: "Localized Red Patches",
			interpretation: "Subsidence detected outside lease boundary; attributed to groundwater/seasonal moisture shifts, not mining activity."
		}
	],
	businessImpact: [
		{
			title: "Cost-Effective Screening",
			description: "Evaluates multi-square-kilometer lease areas remotely, flagging risk zones for targeted engineering checks."
		},
		{
			title: "Anomaly Discrimination",
			description: "Clear spatial delineation protects operators by distinguishing off-lease environmental shifts from mine-induced ground movements."
		},
		{
			title: "Proactive Risk Management",
			description: "Enables integration of satellite radar insights into geotechnical planning, bench design, and site safety protocols."
		}
	]
}];
//#endregion
//#region src/assets/ind-infra.webp
var ind_infra_default = new Proxy({
	"src": "/_astro/ind-infra.DLLYhwTY.webp",
	"width": 1024,
	"height": 1024,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "/home/argha/Desktop/startup/website/src/assets/ind-infra.webp";
	return target[name];
} });
//#endregion
//#region src/assets/ind-urban.webp
var ind_urban_default = new Proxy({
	"src": "/_astro/ind-urban.D4dt9iug.webp",
	"width": 1024,
	"height": 1024,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "/home/argha/Desktop/startup/website/src/assets/ind-urban.webp";
	return target[name];
} });
//#endregion
//#region src/assets/srv-history.webp
var srv_history_default = new Proxy({
	"src": "/_astro/srv-history.BJVnkZyS.webp",
	"width": 1498,
	"height": 1050,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "/home/argha/Desktop/startup/website/src/assets/srv-history.webp";
	return target[name];
} });
//#endregion
//#region src/assets/srv-monitor.webp
var srv_monitor_default = new Proxy({
	"src": "/_astro/srv-monitor.B8hv6EqD.webp",
	"width": 1998,
	"height": 1498,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "/home/argha/Desktop/startup/website/src/assets/srv-monitor.webp";
	return target[name];
} });
//#endregion
//#region src/assets/bg-earth.webp
var bg_earth_default = new Proxy({
	"src": "/_astro/bg-earth.DmeoTFJU.webp",
	"width": 1024,
	"height": 1024,
	"format": "webp"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "/home/argha/Desktop/startup/website/src/assets/bg-earth.webp";
	return target[name];
} });
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const scanOpt = await getImage({
		src: scan_sat_default,
		format: "webp",
		width: 1280
	});
	const earthOpt = await getImage({
		src: bg_earth_default,
		format: "webp",
		width: 1280
	});
	const infraOpt = await getImage({
		src: ind_infra_default,
		format: "webp",
		width: 1280
	});
	let latestPosts = [];
	try {
		const { data } = await supabase.from("insights").select("*").eq("draft", false).order("publishDate", { ascending: false }).limit(3);
		if (data) latestPosts = data;
	} catch (e) {
		console.error("Error fetching insights for homepage", e);
	}
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "InSpectiv Labs | InSAR & Ground Deformation Monitoring",
		"description": "InSpectiv Labs delivers millimeter-precise InSAR ground deformation monitoring and predictive analytics for mining, infrastructure, and insurance sectors.",
		"structuredData": {
			"@context": "https://schema.org",
			"@graph": [
				{
					"@type": "Organization",
					"name": "InSpectiv Labs",
					"url": "https://inspectivlabs.com",
					"logo": "https://inspectivlabs.com/images/logo.png",
					"description": "InSpectiv Labs delivers millimeter-precise InSAR ground deformation monitoring and predictive analytics for mining, infrastructure, and insurance sectors."
				},
				{
					"@type": "WebSite",
					"name": "InSpectiv Labs",
					"url": "https://inspectivlabs.com",
					"potentialAction": {
						"@type": "SearchAction",
						"target": {
							"@type": "EntryPoint",
							"urlTemplate": "https://inspectivlabs.com/search?q={search_term_string}"
						},
						"query-input": "required name=search_term_string"
					}
				},
				{
					"@type": "BreadcrumbList",
					"itemListElement": [{
						"@type": "ListItem",
						"position": 1,
						"name": "Home",
						"item": "https://inspectivlabs.com/"
					}]
				}
			]
		}
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="relative h-screen w-full">${renderComponent($$result, "HeroCarousel", HeroCarousel, {
		"images": [
			scanOpt.src,
			earthOpt.src,
			infraOpt.src
		],
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "/home/argha/Desktop/startup/website/src/components/react/HeroCarousel.tsx",
		"client:component-export": "default"
	})}</section><section id="overview" class="py-8 md:py-12 lg:py-16 md:py-24 bg-white border-b border-gray-200 overflow-hidden"><div class="max-w-[90vw] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"><div class="flex flex-col items-start text-left"><h2 class="text-2xl md:text-3xl lg:text-4xl text-[#1d4ed8] font-normal mb-4 uppercase">OVERVIEW</h2><h3 class="text-xl md:text-2xl text-gray-800 font-light mb-4">Protecting assets globally</h3><p class="text-gray-600 text-base md:text-lg font-light leading-relaxed">InSpectiv Labs provides an advanced Risk Intelligence platform built for the world’s most demanding sectors. By combining automated monitoring, predictive analytics, and secure data pipelines, we deliver actionable intelligence that protects assets, optimizes operations, and ensures regulatory compliance across your entire portfolio.</p></div><div class="relative w-full max-w-lg mx-auto lg:ml-auto lg:mr-0 mt-12 lg:mt-0"><div class="absolute left-[31px] top-8 bottom-8 w-0.5 bg-gray-100"></div><div class="flex flex-col gap-12 relative z-10"><div class="group flex items-start gap-8"><div class="relative z-10 w-16 h-16 shrink-0 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#1d4ed8] group-hover:border-[#1d4ed8] group-hover:shadow-md group-hover:shadow-[#1d4ed8]/10 transition-all duration-300"><i class="bx bx-target-lock text-2xl md:text-3xl lg:text-4xl transition-transform duration-300 group-hover:scale-110"></i></div><div class="pt-1"><h3 class="text-lg md:text-xl font-semibold text-[#000f2c] mb-2 tracking-tight transition-colors duration-300 group-hover:text-[#1d4ed8]">Precision First</h3><p class="text-gray-500 font-light leading-relaxed">We deliver verified, ground-truth data with uncompromised accuracy, ensuring absolute certainty across your operations.</p></div></div><div class="group flex items-start gap-8"><div class="relative z-10 w-16 h-16 shrink-0 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#1d4ed8] group-hover:border-[#1d4ed8] group-hover:shadow-md group-hover:shadow-[#1d4ed8]/10 transition-all duration-300"><i class="bx bx-shield-quarter text-2xl md:text-3xl lg:text-4xl transition-transform duration-300 group-hover:scale-110"></i></div><div class="pt-1"><h3 class="text-lg md:text-xl font-semibold text-[#000f2c] mb-2 tracking-tight transition-colors duration-300 group-hover:text-[#1d4ed8]">Risk Mitigation</h3><p class="text-gray-500 font-light leading-relaxed">Proactive threat identification and automated alerting systems designed to protect financial and structural assets.</p></div></div><div class="group flex items-start gap-8"><div class="relative z-10 w-16 h-16 shrink-0 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#1d4ed8] group-hover:border-[#1d4ed8] group-hover:shadow-md group-hover:shadow-[#1d4ed8]/10 transition-all duration-300"><i class="bx bx-badge-check text-2xl md:text-3xl lg:text-4xl transition-transform duration-300 group-hover:scale-110"></i></div><div class="pt-1"><h3 class="text-lg md:text-xl font-semibold text-[#000f2c] mb-2 tracking-tight transition-colors duration-300 group-hover:text-[#1d4ed8]">Trusted Partner</h3><p class="text-gray-500 font-light leading-relaxed">Built on transparency and reliability, we act as a foundational pillar for your organization's intelligence.</p></div></div></div></div></div></section><section id="industries" class="py-8 md:py-12 lg:py-16 md:py-24 bg-slate-100 border-b border-gray-200"><div class="max-w-[90vw] mx-auto px-6 text-center"><h2 class="text-2xl md:text-3xl lg:text-4xl text-[#1d4ed8] font-normal mb-4 uppercase">INDUSTRY</h2><h3 class="text-xl md:text-2xl text-gray-800 font-light mb-8 md:mb-12 lg:mb-16">Tailored for high-risk environments</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><div class="flex flex-col group bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-left overflow-hidden"><div class="w-full h-48 overflow-hidden relative">${renderComponent($$result, "Image", $$Image, {
		"loading": "lazy",
		"src": ind_mining_default,
		"width": 400,
		"alt": "Mining Operations",
		"class": "w-full h-full object-cover brightness-75 group-hover:brightness-110 opacity-90 group-hover:opacity-100 transition-all duration-700"
	})}<div class="absolute inset-0 bg-gradient-to-t from-[#000f2c]/90 via-[#000f2c]/40 to-transparent"></div><div class="absolute bottom-4 left-6 flex items-center gap-3"><i class="bx bx-hard-hat text-xl md:text-2xl text-cyan-400 w-8 text-center"></i><h3 class="text-[15px] font-semibold text-white uppercase tracking-wider">MINING OPERATIONS</h3></div></div><div class="p-6 flex flex-col flex-grow"><p class="text-gray-600 text-sm font-semibold leading-relaxed mb-6 border-b border-gray-100 pb-4 h-[60px]">Zero-Infra safety intelligence for safer, more productive mines.</p><ul class="space-y-3 mb-8 text-sm font-light text-gray-600 flex-grow"><li class="flex items-start gap-2"><span class="text-[#1d4ed8] mt-0.5">✓</span> Detect slope instability & highwall movement</li><li class="flex items-start gap-2"><span class="text-[#1d4ed8] mt-0.5">✓</span> Monitor tailings dams, dumps & embankments</li><li class="flex items-start gap-2"><span class="text-[#1d4ed8] mt-0.5">✓</span> Improve safety & reduce unplanned downtime</li><li class="flex items-start gap-2"><span class="text-[#1d4ed8] mt-0.5">✓</span> Support DGMS compliance & reporting</li></ul><a href="/industries/mining" class="mt-auto px-4 py-3 border border-[#2563eb] text-[#2563eb] text-xs uppercase tracking-wider font-semibold hover:bg-[#2563eb] hover:text-white transition-colors w-full text-center">LEARN MORE <span class="ml-1">›</span></a></div></div><div class="flex flex-col group bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-left overflow-hidden"><div class="w-full h-48 overflow-hidden relative">${renderComponent($$result, "Image", $$Image, {
		"loading": "lazy",
		"src": ind_infra_default,
		"width": 400,
		"alt": "Infrastructure & Construction",
		"class": "w-full h-full object-cover brightness-75 group-hover:brightness-110 opacity-90 group-hover:opacity-100 transition-all duration-700"
	})}<div class="absolute inset-0 bg-gradient-to-t from-[#000f2c]/90 via-[#000f2c]/40 to-transparent"></div><div class="absolute bottom-4 left-6 flex items-center gap-3"><i class="bx bx-building-house text-xl md:text-2xl text-cyan-400 w-8 text-center"></i><h3 class="text-[15px] font-semibold text-white uppercase tracking-wider">INFRASTRUCTURE</h3></div></div><div class="p-6 flex flex-col flex-grow"><p class="text-gray-600 text-sm font-semibold leading-relaxed mb-6 border-b border-gray-100 pb-4 h-[60px]">Protect critical infrastructure across its lifecycle.</p><ul class="space-y-3 mb-8 text-sm font-light text-gray-600 flex-grow"><li class="flex items-start gap-2"><span class="text-[#1d4ed8] mt-0.5">✓</span> Monitor bridges, highways, rail corridors</li><li class="flex items-start gap-2"><span class="text-[#1d4ed8] mt-0.5">✓</span> Track settlement & subsidence near structures</li><li class="flex items-start gap-2"><span class="text-[#1d4ed8] mt-0.5">✓</span> De-risk tunneling, metro & deep excavations</li><li class="flex items-start gap-2"><span class="text-[#1d4ed8] mt-0.5">✓</span> Ensure long-term structural health</li></ul><a href="/industries/infrastructure" class="mt-auto px-4 py-3 border border-[#2563eb] text-[#2563eb] text-xs uppercase tracking-wider font-semibold hover:bg-[#2563eb] hover:text-white transition-colors w-full text-center">LEARN MORE <span class="ml-1">›</span></a></div></div><div class="flex flex-col group bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-left overflow-hidden"><div class="w-full h-48 overflow-hidden relative">${renderComponent($$result, "Image", $$Image, {
		"loading": "lazy",
		"src": ind_energy_default,
		"width": 400,
		"alt": "Oil, Gas & Energy",
		"class": "w-full h-full object-cover brightness-75 group-hover:brightness-110 opacity-90 group-hover:opacity-100 transition-all duration-700"
	})}<div class="absolute inset-0 bg-gradient-to-t from-[#000f2c]/90 via-[#000f2c]/40 to-transparent"></div><div class="absolute bottom-4 left-6 flex items-center gap-3"><i class="bx bxs-bolt text-xl md:text-2xl text-cyan-400 w-8 text-center"></i><h3 class="text-[15px] font-semibold text-white uppercase tracking-wider">OIL, GAS & ENERGY</h3></div></div><div class="p-6 flex flex-col flex-grow"><p class="text-gray-600 text-sm font-semibold leading-relaxed mb-6 border-b border-gray-100 pb-4 h-[60px]">Monitor ground movement around energy assets.</p><ul class="space-y-3 mb-8 text-sm font-light text-gray-600 flex-grow"><li class="flex items-start gap-2"><span class="text-[#1d4ed8] mt-0.5">✓</span> Monitor well pads, pipelines & compressor stations</li><li class="flex items-start gap-2"><span class="text-[#1d4ed8] mt-0.5">✓</span> Detect subsidence & ground instability early</li><li class="flex items-start gap-2"><span class="text-[#1d4ed8] mt-0.5">✓</span> Reduce environmental & operational risks</li><li class="flex items-start gap-2"><span class="text-[#1d4ed8] mt-0.5">✓</span> Improve asset integrity & lifecycle planning</li></ul><a href="/industries/energy" class="mt-auto px-4 py-3 border border-[#2563eb] text-[#2563eb] text-xs uppercase tracking-wider font-semibold hover:bg-[#2563eb] hover:text-white transition-colors w-full text-center">LEARN MORE <span class="ml-1">›</span></a></div></div><div class="flex flex-col group bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-left overflow-hidden"><div class="w-full h-48 overflow-hidden relative">${renderComponent($$result, "Image", $$Image, {
		"loading": "lazy",
		"src": ind_urban_default,
		"width": 400,
		"alt": "Urban Development & Smart Cities",
		"class": "w-full h-full object-cover brightness-75 group-hover:brightness-110 opacity-90 group-hover:opacity-100 transition-all duration-700"
	})}<div class="absolute inset-0 bg-gradient-to-t from-[#000f2c]/90 via-[#000f2c]/40 to-transparent"></div><div class="absolute bottom-4 left-6 flex items-center gap-3"><i class="bx bx-buildings text-xl md:text-2xl text-cyan-400 w-8 text-center"></i><h3 class="text-[15px] font-semibold text-white uppercase tracking-wider">URBAN DEVELOPMENT</h3></div></div><div class="p-6 flex flex-col flex-grow"><p class="text-gray-600 text-sm font-semibold leading-relaxed mb-6 border-b border-gray-100 pb-4 h-[60px]">Build resilient cities with continuous ground intelligence.</p><ul class="space-y-3 mb-8 text-sm font-light text-gray-600 flex-grow"><li class="flex items-start gap-2"><span class="text-[#1d4ed8] mt-0.5">✓</span> Monitor land subsidence in urban areas</li><li class="flex items-start gap-2"><span class="text-[#1d4ed8] mt-0.5">✓</span> Support zoning, planning & compliance</li><li class="flex items-start gap-2"><span class="text-[#1d4ed8] mt-0.5">✓</span> Detect risks near metros, utilities & buildings</li><li class="flex items-start gap-2"><span class="text-[#1d4ed8] mt-0.5">✓</span> Enable proactive infrastructure management</li></ul><a href="/industries/urban-development" class="mt-auto px-4 py-3 border border-[#2563eb] text-[#2563eb] text-xs uppercase tracking-wider font-semibold hover:bg-[#2563eb] hover:text-white transition-colors w-full text-center">LEARN MORE <span class="ml-1">›</span></a></div></div></div></div></section><section id="solutions" class="py-8 md:py-12 lg:py-16 md:py-24 bg-white border-b border-gray-200"><div class="max-w-[90vw] mx-auto px-6"><div class="text-center mb-8 md:mb-12 lg:mb-16"><h2 class="text-2xl md:text-3xl lg:text-4xl text-[#1d4ed8] font-normal mb-4 uppercase tracking-wider">OUR SOLUTIONS</h2><h3 class="text-xl md:text-2xl text-gray-800 font-light mb-4">Tailored Intelligence for Your Needs</h3><p class="text-gray-600 text-base md:text-lg font-light max-w-3xl mx-auto">Our satellite-based InSAR intelligence is tailored to help different stakeholders monitor ground movement, assess physical risk, and make informed decisions across mining, infrastructure, energy and urban development.</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div class="flex flex-col bg-white border border-gray-100 p-8 lg:p-10 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"><div class="flex flex-col gap-4 mb-6"><svg class="w-16 h-16 mb-2 group-hover:-translate-y-1 transition-transform duration-300" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 12L4 48H60L32 12Z" fill="#1d4ed8" fill-opacity="0.1"></path><path d="M32 20L16 48H48L32 20Z" fill="#3b82f6" fill-opacity="0.4"></path><path d="M32 32L24 48H40L32 32Z" fill="#1d4ed8"></path><circle cx="32" cy="12" r="4" fill="#2563eb"></circle></svg><h3 class="text-base md:text-lg font-semibold text-gray-900 uppercase">Asset Owners &amp; Operators</h3></div><p class="text-gray-600 text-sm font-light mb-8 flex-grow leading-relaxed">Monitor mines, infrastructure, energy assets and urban developments for ground movement, deformation and emerging stability risks.</p><a href="/solutions/asset-owners-operators" class="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#1d4ed8] hover:text-blue-800 uppercase tracking-wider group-hover:translate-x-2 transition-transform">Learn More <span class="sr-only">about Asset Owners and Operators</span> <i class="bx bx-right-arrow-alt text-base md:text-lg"></i></a></div><div class="flex flex-col bg-white border border-gray-100 p-8 lg:p-10 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"><div class="flex flex-col gap-4 mb-6"><svg class="w-16 h-16 mb-2 group-hover:-translate-y-1 transition-transform duration-300" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="24" fill="#1d4ed8" fill-opacity="0.1" stroke="#3b82f6" stroke-width="2"></circle><path d="M8 32C8 32 20 20 32 20C44 20 56 32 56 32" stroke="#1d4ed8" stroke-width="3" stroke-linecap="round"></path><path d="M8 32C8 32 20 44 32 44C44 44 56 32 56 32" stroke="#1d4ed8" stroke-width="3" stroke-linecap="round"></path><circle cx="32" cy="32" r="6" fill="#1d4ed8"></circle></svg><h3 class="text-base md:text-lg font-semibold text-gray-900 uppercase">Engineering &amp; Geotechnical Consultants</h3></div><p class="text-gray-600 text-sm font-light mb-8 flex-grow leading-relaxed">Add historical and wide-area ground deformation intelligence to engineering assessments across mining, infrastructure, energy and urban projects.</p><a href="/solutions/engineering-geotech-consultants" class="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#1d4ed8] hover:text-blue-800 uppercase tracking-wider group-hover:translate-x-2 transition-transform">Learn More <span class="sr-only">about Engineering and Geotechnical Consultants</span> <i class="bx bx-right-arrow-alt text-base md:text-lg"></i></a></div><div class="flex flex-col bg-white border border-gray-100 p-8 lg:p-10 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"><div class="flex flex-col gap-4 mb-6"><svg class="w-16 h-16 mb-2 group-hover:-translate-y-1 transition-transform duration-300" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="40" width="12" height="16" rx="2" fill="#1d4ed8" fill-opacity="0.2"></rect><rect x="26" y="24" width="12" height="32" rx="2" fill="#3b82f6" fill-opacity="0.6"></rect><rect x="44" y="8" width="12" height="48" rx="2" fill="#1d4ed8"></rect><path d="M8 32L26 16L44 24" stroke="#2563eb" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg><h3 class="text-base md:text-lg font-semibold text-gray-900 uppercase leading-tight">Financial Institutions &amp; Lenders</h3></div><p class="text-gray-600 text-sm font-light mb-8 flex-grow leading-relaxed">Assess and monitor the physical risk of financed mining, infrastructure, energy and urban-development assets.</p><a href="/solutions/financial-institutions-lenders" class="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#1d4ed8] hover:text-blue-800 uppercase tracking-wider group-hover:translate-x-2 transition-transform">Learn More <span class="sr-only">about Financial Institutions and Lenders</span> <i class="bx bx-right-arrow-alt text-base md:text-lg"></i></a></div><div class="flex flex-col bg-white border border-gray-100 p-8 lg:p-10 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"><div class="flex flex-col gap-4 mb-6"><svg class="w-16 h-16 mb-2 group-hover:-translate-y-1 transition-transform duration-300" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 4L8 12V28C8 44 20 56 32 60C44 56 56 44 56 28V12L32 4Z" fill="#1d4ed8" fill-opacity="0.1" stroke="#3b82f6" stroke-width="2"></path><path d="M32 12L16 18V30C16 40 24 48 32 50C40 48 48 40 48 30V18L32 12Z" fill="#1d4ed8"></path><path d="M24 30L28 34L40 22" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg><h3 class="text-base md:text-lg font-semibold text-gray-900 uppercase">Insurance &amp; Risk Professionals</h3></div><p class="text-gray-600 text-sm font-light mb-8 flex-grow leading-relaxed">Use historical and ongoing ground deformation intelligence to strengthen risk assessment and claims investigation across critical assets.</p><a href="/solutions/insurance-risk-professionals" class="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#1d4ed8] hover:text-blue-800 uppercase tracking-wider group-hover:translate-x-2 transition-transform">Learn More <span class="sr-only">about Insurance and Risk Professionals</span> <i class="bx bx-right-arrow-alt text-base md:text-lg"></i></a></div></div></div></section><section id="services" class="py-12 md:py-16 bg-slate-100 border-b border-gray-200"><div class="max-w-[90vw] mx-auto px-6"><div class="text-center mb-10"><h2 class="text-xl md:text-2xl text-[#1d4ed8] font-normal mb-2 uppercase">OUR SERVICES</h2><h3 class="text-lg md:text-xl text-gray-800 font-light mb-4">End-to-End Risk Intelligence</h3><p class="text-gray-600 text-base font-light max-w-2xl mx-auto">From establishing pre-project baselines to delivering continuous operational monitoring, we provide complete visibility into ground movement and structural health.</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-10"><div class="bg-white border border-gray-200 rounded-xl overflow-hidden group hover:shadow-lg hover:border-[#1d4ed8]/30 transition-all duration-300 flex flex-col h-full"><div class="h-64 md:h-80 overflow-hidden relative shrink-0"><div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>${renderComponent($$result, "Image", $$Image, {
		"loading": "lazy",
		"src": srv_history_default,
		"width": 400,
		"alt": "Historical Analysis",
		"class": "w-full h-full object-cover brightness-75 group-hover:brightness-110 opacity-90 group-hover:opacity-100 transition-all duration-700"
	})}</div><div class="p-8 flex flex-col flex-grow"><div class="flex items-center gap-4 mb-5"><div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1d4ed8]"><i class="bx bx-history text-lg md:text-xl"></i></div><h3 class="text-lg md:text-xl font-semibold text-gray-900">Historical Analysis</h3></div><p class="text-gray-600 text-sm font-light leading-relaxed mb-6 flex-grow">Access years of archived satellite radar data to establish a comprehensive baseline of ground movement. Identify pre-existing subsidence and validate historical stability before you deploy capital or break ground.</p><ul class="space-y-3"><li class="flex items-start gap-2 text-gray-700 text-sm font-light"><i class="bx bx-check text-[#1d4ed8] text-base md:text-lg mt-0.5"></i>Establish pre-construction baselines</li><li class="flex items-start gap-2 text-gray-700 text-sm font-light"><i class="bx bx-check text-[#1d4ed8] text-base md:text-lg mt-0.5"></i>Validate historical asset stability</li></ul><a href="/services/historical-analysis" class="mt-8 px-4 py-3 border border-[#2563eb] text-[#2563eb] text-xs uppercase tracking-wider font-semibold hover:bg-[#2563eb] hover:text-white transition-colors w-full text-center">LEARN MORE <span class="ml-1">›</span></a></div></div><div class="bg-white border border-gray-200 rounded-xl overflow-hidden group hover:shadow-lg hover:border-[#1d4ed8]/30 transition-all duration-300 flex flex-col h-full"><div class="h-64 md:h-80 overflow-hidden relative shrink-0"><div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>${renderComponent($$result, "Image", $$Image, {
		"loading": "lazy",
		"src": srv_monitor_default,
		"width": 600,
		"alt": "Continuous Monitoring",
		"class": "w-full h-full object-cover brightness-75 group-hover:brightness-110 opacity-90 group-hover:opacity-100 transition-all duration-700"
	})}</div><div class="p-8 flex flex-col flex-grow"><div class="flex items-center gap-4 mb-5"><div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1d4ed8]"><i class="bx bx-radar text-lg md:text-xl"></i></div><h3 class="text-lg md:text-xl font-semibold text-gray-900">Continuous Monitoring</h3></div><p class="text-gray-600 text-sm font-light leading-relaxed mb-6 flex-grow">Deploy ongoing, millimeter-scale displacement monitoring for active operations and critical infrastructure. Our automated systems track structural health and provide early warnings for anomalous movement.</p><ul class="space-y-3"><li class="flex items-start gap-2 text-gray-700 text-sm font-light"><i class="bx bx-check text-[#1d4ed8] text-base md:text-lg mt-0.5"></i>Millimeter-scale precision monitoring</li><li class="flex items-start gap-2 text-gray-700 text-sm font-light"><i class="bx bx-check text-[#1d4ed8] text-base md:text-lg mt-0.5"></i>Automated risk alerts for active sites</li></ul><a href="/services/continuous-monitoring" class="mt-8 px-4 py-3 border border-[#2563eb] text-[#2563eb] text-xs uppercase tracking-wider font-semibold hover:bg-[#2563eb] hover:text-white transition-colors w-full text-center">LEARN MORE <span class="ml-1">›</span></a></div></div></div></div></section><section id="case-studies" class="py-8 md:py-12 lg:py-16 md:py-24 bg-slate-50 border-b border-gray-200"><div class="max-w-[90vw] mx-auto px-6"><div class="text-center mb-8 md:mb-12 lg:mb-16"><h2 class="text-2xl md:text-3xl lg:text-4xl text-[#1d4ed8] font-normal mb-4 uppercase tracking-wider">CASE STUDIES</h2><h3 class="text-xl md:text-2xl text-gray-800 font-light mb-4">Proven impact in the field.</h3><p class="text-gray-600 text-base md:text-lg font-light max-w-2xl mx-auto">See how our risk intelligence platform is actively deployed to protect critical assets worldwide.</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">${caseStudies.map((study) => renderTemplate`<div class="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"><div class="h-48 overflow-hidden relative"><img loading="lazy"${addAttribute(study.cardImage, "src")}${addAttribute(study.cardTitle, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"></div><div class="p-8 flex flex-col flex-grow"><h4 class="text-lg md:text-xl font-bold text-[#000f2c] mb-2 group-hover:text-[#1d4ed8] transition-colors">${study.cardTitle}</h4>${study.cardSubtitle && renderTemplate`<p class="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider">${study.cardSubtitle}</p>`}<p class="text-gray-600 text-sm font-light leading-relaxed mb-6 flex-grow">${study.cardDescription}</p><a${addAttribute(study.slug ? `/case-studies/${study.slug}` : "#!", "href")} class="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4ed8] uppercase tracking-wider group-hover:translate-x-2 transition-transform mt-auto w-max">Read Full Case Study <i class="bx bx-right-arrow-alt text-lg md:text-xl"></i></a></div></div>`)}</div></div></section><section class="py-8 md:py-12 lg:py-16 md:py-24 bg-white border-b border-gray-200"><div class="max-w-[90vw] mx-auto px-6 text-center"><h2 class="text-2xl md:text-3xl lg:text-4xl text-[#1d4ed8] font-normal mb-4 uppercase">LATEST INSIGHTS</h2><h3 class="text-xl md:text-2xl text-gray-800 font-light mb-4">Discover our recent studies.</h3><p class="text-gray-600 text-base md:text-lg font-light max-w-2xl mx-auto mb-8 md:mb-12 lg:mb-16">Stay updated with our latest analyses, case studies, and industry intelligence reports.</p><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mx-auto mb-8 md:mb-12 lg:mb-16 text-left">${latestPosts.map((post) => renderTemplate`<div class="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"><a${addAttribute(`/insights/${post.slug}`, "href")}${addAttribute(post.title, "aria-label")} class="block h-48 sm:h-56 relative overflow-hidden shrink-0">${post.heroImage_url ? renderTemplate`<img loading="lazy" decoding="async"${addAttribute(post.heroImage_url, "src")}${addAttribute(post.title, "alt")} class="object-cover w-full h-full brightness-75 group-hover:brightness-110 opacity-90 group-hover:opacity-100 transition-all duration-700 ease-out">` : renderTemplate`<img loading="lazy" decoding="async" src="/images/bg-insights.webp"${addAttribute(post.title, "alt")} class="object-cover w-full h-full brightness-75 group-hover:brightness-110 opacity-90 group-hover:opacity-100 transition-all duration-700 ease-out">`}</a><div class="p-6 md:p-8 flex flex-col flex-grow"><div class="flex items-center gap-4 mb-4"><span class="text-sm font-semibold text-[#1d4ed8] uppercase tracking-wider">${post.industry || "Insight"}</span></div><h3 class="text-lg md:text-xl font-bold text-[#000f2c] mb-3 group-hover:text-[#1d4ed8] transition-colors leading-snug"><a${addAttribute(`/insights/${post.slug}`, "href")}>${post.title}</a></h3><p class="text-gray-600 text-sm font-light leading-relaxed mb-6 flex-grow line-clamp-3">${post.description}</p><a${addAttribute(`/insights/${post.slug}`, "href")} class="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4ed8] uppercase tracking-wider group-hover:translate-x-2 transition-transform mt-auto w-max">Read Article <i class="bx bx-right-arrow-alt text-lg"></i></a></div></div>`)}</div><a href="/insights" class="inline-flex items-center gap-2 border border-[#1d4ed8] bg-transparent text-[#1d4ed8] px-4 py-3 rounded text-sm font-semibold uppercase tracking-widest hover:bg-[#1d4ed8] hover:text-white transition-colors duration-300 shadow-sm">VIEW ALL POSTS</a></div></section><section class="py-10 md:py-16 bg-slate-100 border-t border-gray-200"><div class="max-w-[90vw] mx-auto px-6 flex flex-col md:flex-row items-center"><div class="w-full md:w-1/2 mb-8 md:mb-0 md:pr-12"><h2 class="text-xl md:text-2xl md:text-3xl text-[#1d4ed8] font-normal mb-3 uppercase tracking-widest">CONTACT US</h2><h3 class="text-lg md:text-xl md:text-2xl text-gray-800 font-light mb-3">Ready to secure your operations?</h3><p class="text-gray-600 text-base md:text-lg font-light max-w-2xl mx-auto mb-6">Our experts are ready to demonstrate how the InSpectiv Labs platform can integrate with your existing workflows to provide immediate, actionable risk intelligence.</p><div class="mb-6 space-y-3"><div class="flex items-center gap-3 text-gray-700 font-semibold text-sm"><div class="w-10 h-10 rounded-full bg-blue-50 flex justify-center items-center"><i class="bx bx-envelope text-lg md:text-xl text-[#1d4ed8]"></i></div>connect@inspectivlabs.com</div><div class="flex items-center gap-3 text-gray-700 font-semibold text-sm"><div class="w-10 h-10 rounded-full bg-blue-50 flex justify-center items-center"><i class="bx bx-map text-lg md:text-xl text-[#1d4ed8]"></i></div>Hyderabad, India</div></div><a href="/contact" class="inline-block px-4 py-3 bg-[#1d4ed8] text-white text-sm uppercase tracking-wider font-semibold hover:bg-blue-800 transition-colors shadow-sm rounded-sm">REQUEST A DEMO</a></div><div class="w-full md:w-1/2 h-[300px] md:h-[400px] relative flex justify-center md:justify-end items-center">${renderComponent($$result, "NetworkMap", NetworkMap, {
		"client:visible": true,
		"client:component-hydration": "visible",
		"client:component-path": "/home/argha/Desktop/startup/website/src/components/NetworkMap.tsx",
		"client:component-export": "default"
	})}</div></div></section>` })}`;
}, "/home/argha/Desktop/startup/website/src/pages/index.astro", void 0);
var $$file = "/home/argha/Desktop/startup/website/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
