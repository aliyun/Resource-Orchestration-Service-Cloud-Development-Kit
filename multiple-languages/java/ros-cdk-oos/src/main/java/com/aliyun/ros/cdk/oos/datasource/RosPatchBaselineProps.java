package com.aliyun.ros.cdk.oos.datasource;

/**
 * Properties for defining a <code>RosPatchBaseline</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaseline
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:34.265Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.datasource.RosPatchBaselineProps")
@software.amazon.jsii.Jsii.Proxy(RosPatchBaselineProps.Jsii$Proxy.class)
public interface RosPatchBaselineProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPatchBaselineName();

    /**
     * @return a {@link Builder} of {@link RosPatchBaselineProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosPatchBaselineProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosPatchBaselineProps> {
        java.lang.Object patchBaselineName;

        /**
         * Sets the value of {@link RosPatchBaselineProps#getPatchBaselineName}
         * @param patchBaselineName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder patchBaselineName(java.lang.String patchBaselineName) {
            this.patchBaselineName = patchBaselineName;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselineProps#getPatchBaselineName}
         * @param patchBaselineName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder patchBaselineName(com.aliyun.ros.cdk.core.IResolvable patchBaselineName) {
            this.patchBaselineName = patchBaselineName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosPatchBaselineProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosPatchBaselineProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosPatchBaselineProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosPatchBaselineProps {
        private final java.lang.Object patchBaselineName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.patchBaselineName = software.amazon.jsii.Kernel.get(this, "patchBaselineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.patchBaselineName = java.util.Objects.requireNonNull(builder.patchBaselineName, "patchBaselineName is required");
        }

        @Override
        public final java.lang.Object getPatchBaselineName() {
            return this.patchBaselineName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("patchBaselineName", om.valueToTree(this.getPatchBaselineName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oos.datasource.RosPatchBaselineProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosPatchBaselineProps.Jsii$Proxy that = (RosPatchBaselineProps.Jsii$Proxy) o;

            return this.patchBaselineName.equals(that.patchBaselineName);
        }

        @Override
        public final int hashCode() {
            int result = this.patchBaselineName.hashCode();
            return result;
        }
    }
}
