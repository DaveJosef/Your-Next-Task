import useComponentVisible from "@/hooks/useComponentVisible";
import { fireEvent, render, renderHook, screen } from "@testing-library/react";

describe('useComponentVisible', () => {
    it('should return ref, isVisible, and setIsVisible', () => {
        const initialIsVisible = false;
        const hook = renderHook(() => useComponentVisible(initialIsVisible, () => {}));

        expect(hook.result.current.ref).toBeDefined();
        expect(hook.result.current.isComponentVisible).toEqual(initialIsVisible);
        expect(hook.result.current.setIsComponentVisible).toBeDefined();
    });

    it('should set Visible to false when clicking the Document outside the Ref', () => {
        const initialIsVisible = true;
        const hook = renderHook(() => useComponentVisible(initialIsVisible, () => {}));
        
        render(
            <div data-testid={'modal-wrapper'}>
                <div ref={hook.result.current.ref}>Supposedly a Modal</div>
            </div>
        );
        fireEvent.click(screen.getByTestId('modal-wrapper'));

        expect(hook.result.current.isComponentVisible).toEqual(!initialIsVisible);
    });
});
