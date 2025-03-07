package com.aliyun.ros.cdk.oos.datasource;

/**
 * Properties for defining a <code>PatchBaseline</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaseline
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.465Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.datasource.PatchBaselineProps")
@software.amazon.jsii.Jsii.Proxy(PatchBaselineProps.Jsii$Proxy.class)
public interface PatchBaselineProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property patchBaselineName: The name of the patch baseline.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPatchBaselineName();

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
     * @return a {@link Builder} of {@link PatchBaselineProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PatchBaselineProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PatchBaselineProps> {
        java.lang.Object patchBaselineName;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link PatchBaselineProps#getPatchBaselineName}
         * @param patchBaselineName Property patchBaselineName: The name of the patch baseline. This parameter is required.
         * @return {@code this}
         */
        public Builder patchBaselineName(java.lang.String patchBaselineName) {
            this.patchBaselineName = patchBaselineName;
            return this;
        }

        /**
         * Sets the value of {@link PatchBaselineProps#getPatchBaselineName}
         * @param patchBaselineName Property patchBaselineName: The name of the patch baseline. This parameter is required.
         * @return {@code this}
         */
        public Builder patchBaselineName(com.aliyun.ros.cdk.core.IResolvable patchBaselineName) {
            this.patchBaselineName = patchBaselineName;
            return this;
        }

        /**
         * Sets the value of {@link PatchBaselineProps#getRefreshOptions}
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
         * Sets the value of {@link PatchBaselineProps#getRefreshOptions}
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
         * Builds the configured instance.
         * @return a new instance of {@link PatchBaselineProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PatchBaselineProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PatchBaselineProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PatchBaselineProps {
        private final java.lang.Object patchBaselineName;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.patchBaselineName = software.amazon.jsii.Kernel.get(this, "patchBaselineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.patchBaselineName = java.util.Objects.requireNonNull(builder.patchBaselineName, "patchBaselineName is required");
            this.refreshOptions = builder.refreshOptions;
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
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("patchBaselineName", om.valueToTree(this.getPatchBaselineName()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oos.datasource.PatchBaselineProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PatchBaselineProps.Jsii$Proxy that = (PatchBaselineProps.Jsii$Proxy) o;

            if (!patchBaselineName.equals(that.patchBaselineName)) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.patchBaselineName.hashCode();
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
