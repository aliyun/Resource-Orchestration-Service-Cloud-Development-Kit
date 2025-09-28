"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haveOutput = void 0;
const assertion_1 = require("../assertion");
class HaveOutputAssertion extends assertion_1.JestFriendlyAssertion {
    constructor(outputName, exportName, outputValue) {
        super();
        this.outputName = outputName;
        this.exportName = exportName;
        this.outputValue = outputValue;
        this.inspected = [];
        if (!this.outputName && !this.exportName) {
            throw new Error('At least one of [outputName, exportName] should be provided');
        }
    }
    get description() {
        const descriptionPartsArray = new Array();
        if (this.outputName) {
            descriptionPartsArray.push(`name '${this.outputName}'`);
        }
        if (this.exportName) {
            descriptionPartsArray.push(`export name ${JSON.stringify(this.exportName)}`);
        }
        if (this.outputValue) {
            descriptionPartsArray.push(`value ${JSON.stringify(this.outputValue)}`);
        }
        return 'output with ' + descriptionPartsArray.join(', ');
    }
    assertUsing(inspector) {
        var _a;
        if (!('Outputs' in inspector.value)) {
            return false;
        }
        for (const [name, props] of Object.entries(inspector.value.Outputs)) {
            const mismatchedFields = new Array();
            if (this.outputName && name !== this.outputName) {
                mismatchedFields.push('name');
            }
            if (this.exportName && JSON.stringify(this.exportName) !== JSON.stringify((_a = props.Export) === null || _a === void 0 ? void 0 : _a.Name)) {
                mismatchedFields.push('export name');
            }
            if (this.outputValue && JSON.stringify(this.outputValue) !== JSON.stringify(props.Value)) {
                mismatchedFields.push('value');
            }
            if (mismatchedFields.length === 0) {
                return true;
            }
            this.inspected.push({
                output: { [name]: props },
                failureReason: `mismatched ${mismatchedFields.join(', ')}`,
            });
        }
        return false;
    }
    generateErrorMessage() {
        const lines = new Array();
        lines.push(`None of ${this.inspected.length} outputs matches ${this.description}.`);
        for (const inspected of this.inspected) {
            lines.push(`- ${inspected.failureReason} in:`);
            lines.push(indent(4, JSON.stringify(inspected.output, null, 2)));
        }
        return lines.join('\n');
    }
}
/**
 * An assertion  to check whether Output with particular properties is present in a stack
 * @param props  properties of the Output that is being asserted against.
 *               Check ``HaveOutputProperties`` interface to get full list of available parameters
 */
function haveOutput(props) {
    return new HaveOutputAssertion(props.outputName, props.exportName, props.outputValue);
}
exports.haveOutput = haveOutput;
function indent(n, s) {
    const prefix = ' '.repeat(n);
    return prefix + s.replace(/\n/g, '\n' + prefix);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGF2ZS1vdXRwdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoYXZlLW91dHB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw0Q0FBcUQ7QUFHckQsTUFBTSxtQkFBb0IsU0FBUSxpQ0FBcUM7SUFHckUsWUFBNkIsVUFBbUIsRUFBbUIsVUFBZ0IsRUFBVSxXQUFpQjtRQUM1RyxLQUFLLEVBQUUsQ0FBQztRQURtQixlQUFVLEdBQVYsVUFBVSxDQUFTO1FBQW1CLGVBQVUsR0FBVixVQUFVLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBTTtRQUY3RixjQUFTLEdBQXdCLEVBQUUsQ0FBQztRQUluRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDeEMsTUFBTSxJQUFJLEtBQUssQ0FBQyw2REFBNkQsQ0FBQyxDQUFDO1NBQ2hGO0lBQ0gsQ0FBQztJQUVELElBQVcsV0FBVztRQUNwQixNQUFNLHFCQUFxQixHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFFbEQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLHFCQUFxQixDQUFDLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM5RTtRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixxQkFBcUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDekU7UUFFRCxPQUFPLGNBQWMsR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7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RnJpZW5kbHlBc3NlcnRpb24gfSBmcm9tICcuLi9hc3NlcnRpb24nO1xuaW1wb3J0IHsgU3RhY2tJbnNwZWN0b3IgfSBmcm9tICcuLi9pbnNwZWN0b3InO1xuXG5jbGFzcyBIYXZlT3V0cHV0QXNzZXJ0aW9uIGV4dGVuZHMgSmVzdEZyaWVuZGx5QXNzZXJ0aW9uPFN0YWNrSW5zcGVjdG9yPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgaW5zcGVjdGVkOiBJbnNwZWN0aW9uRmFpbHVyZVtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBvdXRwdXROYW1lPzogc3RyaW5nLCBwcml2YXRlIHJlYWRvbmx5IGV4cG9ydE5hbWU/OiBhbnksIHByaXZhdGUgb3V0cHV0VmFsdWU/OiBhbnkpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICghdGhpcy5vdXRwdXROYW1lICYmICF0aGlzLmV4cG9ydE5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQXQgbGVhc3Qgb25lIG9mIFtvdXRwdXROYW1lLCBleHBvcnROYW1lXSBzaG91bGQgYmUgcHJvdmlkZWQnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB7XG4gICAgY29uc3QgZGVzY3JpcHRpb25QYXJ0c0FycmF5ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcblxuICAgIGlmICh0aGlzLm91dHB1dE5hbWUpIHtcbiAgICAgIGRlc2NyaXB0aW9uUGFydHNBcnJheS5wdXNoKGBuYW1lICcke3RoaXMub3V0cHV0TmFtZX0nYCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmV4cG9ydE5hbWUpIHtcbiAgICAgIGRlc2NyaXB0aW9uUGFydHNBcnJheS5wdXNoKGBleHBvcnQgbmFtZSAke0pTT04uc3RyaW5naWZ5KHRoaXMuZXhwb3J0TmFtZSl9YCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm91dHB1dFZhbHVlKSB7XG4gICAgICBkZXNjcmlwdGlvblBhcnRzQXJyYXkucHVzaChgdmFsdWUgJHtKU09OLnN0cmluZ2lmeSh0aGlzLm91dHB1dFZhbHVlKX1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJ291dHB1dCB3aXRoICcgKyBkZXNjcmlwdGlvblBhcnRzQXJyYXkuam9pbignLCAnKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3NlcnRVc2luZyhpbnNwZWN0b3I6IFN0YWNrSW5zcGVjdG9yKTogYm9vbGVhbiB7XG4gICAgaWYgKCEoJ091dHB1dHMnIGluIGluc3BlY3Rvci52YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBwcm9wc10gb2YgT2JqZWN0LmVudHJpZXMoaW5zcGVjdG9yLnZhbHVlLk91dHB1dHMgYXMgUmVjb3JkPHN0cmluZywgYW55PikpIHtcbiAgICAgIGNvbnN0IG1pc21hdGNoZWRGaWVsZHMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuXG4gICAgICBpZiAodGhpcy5vdXRwdXROYW1lICYmIG5hbWUgIT09IHRoaXMub3V0cHV0TmFtZSkge1xuICAgICAgICBtaXNtYXRjaGVkRmllbGRzLnB1c2goJ25hbWUnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZXhwb3J0TmFtZSAmJiBKU09OLnN0cmluZ2lmeSh0aGlzLmV4cG9ydE5hbWUpICE9PSBKU09OLnN0cmluZ2lmeShwcm9wcy5FeHBvcnQ/Lk5hbWUpKSB7XG4gICAgICAgIG1pc21hdGNoZWRGaWVsZHMucHVzaCgnZXhwb3J0IG5hbWUnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub3V0cHV0VmFsdWUgJiYgSlNPTi5zdHJpbmdpZnkodGhpcy5vdXRwdXRWYWx1ZSkgIT09IEpTT04uc3RyaW5naWZ5KHByb3BzLlZhbHVlKSkge1xuICAgICAgICBtaXNtYXRjaGVkRmllbGRzLnB1c2goJ3ZhbHVlJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtaXNtYXRjaGVkRmllbGRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnNwZWN0ZWQucHVzaCh7XG4gICAgICAgIG91dHB1dDogeyBbbmFtZV06IHByb3BzIH0sXG4gICAgICAgIGZhaWx1cmVSZWFzb246IGBtaXNtYXRjaGVkICR7bWlzbWF0Y2hlZEZpZWxkcy5qb2luKCcsICcpfWAsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGVFcnJvck1lc3NhZ2UoKSB7XG4gICAgY29uc3QgbGluZXMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuXG4gICAgbGluZXMucHVzaChgTm9uZSBvZiAke3RoaXMuaW5zcGVjdGVkLmxlbmd0aH0gb3V0cHV0cyBtYXRjaGVzICR7dGhpcy5kZXNjcmlwdGlvbn0uYCk7XG5cbiAgICBmb3IgKGNvbnN0IGluc3BlY3RlZCBvZiB0aGlzLmluc3BlY3RlZCkge1xuICAgICAgbGluZXMucHVzaChgLSAke2luc3BlY3RlZC5mYWlsdXJlUmVhc29ufSBpbjpgKTtcbiAgICAgIGxpbmVzLnB1c2goaW5kZW50KDQsIEpTT04uc3RyaW5naWZ5KGluc3BlY3RlZC5vdXRwdXQsIG51bGwsIDIpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbmVzLmpvaW4oJ1xcbicpO1xuICB9XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGZvciBoYXZlT3V0cHV0IGZ1bmN0aW9uIHByb3BlcnRpZXNcbiAqIE5PVEUgdGhhdCBhdCBsZWFzdCBvbmUgb2YgW291dHB1dE5hbWUsIGV4cG9ydE5hbWVdIHNob3VsZCBiZSBwcm92aWRlZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEhhdmVPdXRwdXRQcm9wZXJ0aWVzIHtcbiAgLyoqXG4gICAqIExvZ2ljYWwgSUQgb2YgdGhlIG91dHB1dFxuICAgKiBAZGVmYXVsdCAtIHRoZSBsb2dpY2FsIElEIG9mIHRoZSBvdXRwdXQgd2lsbCBub3QgYmUgY2hlY2tlZFxuICAgKi9cbiAgb3V0cHV0TmFtZT86IHN0cmluZztcbiAgLyoqXG4gICAqIEV4cG9ydCBuYW1lIG9mIHRoZSBvdXRwdXQsIHdoZW4gaXQncyBleHBvcnRlZCBmb3IgY3Jvc3Mtc3RhY2sgcmVmZXJlbmNpbmdcbiAgICogQGRlZmF1bHQgLSB0aGUgZXhwb3J0IG5hbWUgaXMgbm90IHJlcXVpcmVkIGFuZCB3aWxsIG5vdCBiZSBjaGVja2VkXG4gICAqL1xuICBleHBvcnROYW1lPzogYW55O1xuICAvKipcbiAgICogVmFsdWUgb2YgdGhlIG91dHB1dDtcbiAgICogQGRlZmF1bHQgLSB0aGUgdmFsdWUgd2lsbCBub3QgYmUgY2hlY2tlZFxuICAgKi9cbiAgb3V0cHV0VmFsdWU/OiBhbnk7XG59XG5cbmludGVyZmFjZSBJbnNwZWN0aW9uRmFpbHVyZSB7XG4gIG91dHB1dDogYW55O1xuICBmYWlsdXJlUmVhc29uOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQW4gYXNzZXJ0aW9uICB0byBjaGVjayB3aGV0aGVyIE91dHB1dCB3aXRoIHBhcnRpY3VsYXIgcHJvcGVydGllcyBpcyBwcmVzZW50IGluIGEgc3RhY2tcbiAqIEBwYXJhbSBwcm9wcyAgcHJvcGVydGllcyBvZiB0aGUgT3V0cHV0IHRoYXQgaXMgYmVpbmcgYXNzZXJ0ZWQgYWdhaW5zdC5cbiAqICAgICAgICAgICAgICAgQ2hlY2sgYGBIYXZlT3V0cHV0UHJvcGVydGllc2BgIGludGVyZmFjZSB0byBnZXQgZnVsbCBsaXN0IG9mIGF2YWlsYWJsZSBwYXJhbWV0ZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXZlT3V0cHV0KHByb3BzOiBIYXZlT3V0cHV0UHJvcGVydGllcyk6IEplc3RGcmllbmRseUFzc2VydGlvbjxTdGFja0luc3BlY3Rvcj4ge1xuICByZXR1cm4gbmV3IEhhdmVPdXRwdXRBc3NlcnRpb24ocHJvcHMub3V0cHV0TmFtZSwgcHJvcHMuZXhwb3J0TmFtZSwgcHJvcHMub3V0cHV0VmFsdWUpO1xufVxuXG5mdW5jdGlvbiBpbmRlbnQobjogbnVtYmVyLCBzOiBzdHJpbmcpIHtcbiAgY29uc3QgcHJlZml4ID0gJyAnLnJlcGVhdChuKTtcbiAgcmV0dXJuIHByZWZpeCArIHMucmVwbGFjZSgvXFxuL2csICdcXG4nICsgcHJlZml4KTtcbn1cbiJdfQ==