package com.aliyun.ros.cdk.oos.datasource;

/**
 * Properties for defining a <code>PatchBaselines</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaselines
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:27.390Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.datasource.PatchBaselinesProps")
@software.amazon.jsii.Jsii.Proxy(PatchBaselinesProps.Jsii$Proxy.class)
public interface PatchBaselinesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property operationSystem: Operating system type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOperationSystem() {
        return null;
    }

    /**
     * Property patchBaselineName: The name of the patch baseline.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPatchBaselineName() {
        return null;
    }

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * Property shareType: Patch baseline sharing type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getShareType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PatchBaselinesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PatchBaselinesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PatchBaselinesProps> {
        java.lang.Object operationSystem;
        java.lang.Object patchBaselineName;
        java.lang.Object refreshOptions;
        java.lang.Object shareType;

        /**
         * Sets the value of {@link PatchBaselinesProps#getOperationSystem}
         * @param operationSystem Property operationSystem: Operating system type.
         * @return {@code this}
         */
        public Builder operationSystem(java.lang.String operationSystem) {
            this.operationSystem = operationSystem;
            return this;
        }

        /**
         * Sets the value of {@link PatchBaselinesProps#getOperationSystem}
         * @param operationSystem Property operationSystem: Operating system type.
         * @return {@code this}
         */
        public Builder operationSystem(com.aliyun.ros.cdk.core.IResolvable operationSystem) {
            this.operationSystem = operationSystem;
            return this;
        }

        /**
         * Sets the value of {@link PatchBaselinesProps#getPatchBaselineName}
         * @param patchBaselineName Property patchBaselineName: The name of the patch baseline.
         * @return {@code this}
         */
        public Builder patchBaselineName(java.lang.String patchBaselineName) {
            this.patchBaselineName = patchBaselineName;
            return this;
        }

        /**
         * Sets the value of {@link PatchBaselinesProps#getPatchBaselineName}
         * @param patchBaselineName Property patchBaselineName: The name of the patch baseline.
         * @return {@code this}
         */
        public Builder patchBaselineName(com.aliyun.ros.cdk.core.IResolvable patchBaselineName) {
            this.patchBaselineName = patchBaselineName;
            return this;
        }

        /**
         * Sets the value of {@link PatchBaselinesProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link PatchBaselinesProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link PatchBaselinesProps#getShareType}
         * @param shareType Property shareType: Patch baseline sharing type.
         * @return {@code this}
         */
        public Builder shareType(java.lang.String shareType) {
            this.shareType = shareType;
            return this;
        }

        /**
         * Sets the value of {@link PatchBaselinesProps#getShareType}
         * @param shareType Property shareType: Patch baseline sharing type.
         * @return {@code this}
         */
        public Builder shareType(com.aliyun.ros.cdk.core.IResolvable shareType) {
            this.shareType = shareType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PatchBaselinesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PatchBaselinesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PatchBaselinesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PatchBaselinesProps {
        private final java.lang.Object operationSystem;
        private final java.lang.Object patchBaselineName;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object shareType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.operationSystem = software.amazon.jsii.Kernel.get(this, "operationSystem", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.patchBaselineName = software.amazon.jsii.Kernel.get(this, "patchBaselineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.shareType = software.amazon.jsii.Kernel.get(this, "shareType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.operationSystem = builder.operationSystem;
            this.patchBaselineName = builder.patchBaselineName;
            this.refreshOptions = builder.refreshOptions;
            this.shareType = builder.shareType;
        }

        @Override
        public final java.lang.Object getOperationSystem() {
            return this.operationSystem;
        }

        @Override
        public final java.lang.Object getPatchBaselineName() {
            return this.patchBaselineName;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getShareType() {
            return this.shareType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getOperationSystem() != null) {
                data.set("operationSystem", om.valueToTree(this.getOperationSystem()));
            }
            if (this.getPatchBaselineName() != null) {
                data.set("patchBaselineName", om.valueToTree(this.getPatchBaselineName()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getShareType() != null) {
                data.set("shareType", om.valueToTree(this.getShareType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oos.datasource.PatchBaselinesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PatchBaselinesProps.Jsii$Proxy that = (PatchBaselinesProps.Jsii$Proxy) o;

            if (this.operationSystem != null ? !this.operationSystem.equals(that.operationSystem) : that.operationSystem != null) return false;
            if (this.patchBaselineName != null ? !this.patchBaselineName.equals(that.patchBaselineName) : that.patchBaselineName != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            return this.shareType != null ? this.shareType.equals(that.shareType) : that.shareType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.operationSystem != null ? this.operationSystem.hashCode() : 0;
            result = 31 * result + (this.patchBaselineName != null ? this.patchBaselineName.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.shareType != null ? this.shareType.hashCode() : 0);
            return result;
        }
    }
}
