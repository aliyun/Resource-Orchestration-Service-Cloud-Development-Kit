package com.aliyun.ros.cdk.cdn;

/**
 * Properties for defining a <code>RosStagingConfig</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-stagingconfig
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:22.295Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cdn.$Module.class, fqn = "@alicloud/ros-cdk-cdn.RosStagingConfigProps")
@software.amazon.jsii.Jsii.Proxy(RosStagingConfigProps.Jsii$Proxy.class)
public interface RosStagingConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomainName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFunctions();

    /**
     * @return a {@link Builder} of {@link RosStagingConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosStagingConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosStagingConfigProps> {
        java.lang.Object domainName;
        java.lang.Object functions;

        /**
         * Sets the value of {@link RosStagingConfigProps#getDomainName}
         * @param domainName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(java.lang.String domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link RosStagingConfigProps#getDomainName}
         * @param domainName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link RosStagingConfigProps#getFunctions}
         * @param functions the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder functions(com.aliyun.ros.cdk.core.IResolvable functions) {
            this.functions = functions;
            return this;
        }

        /**
         * Sets the value of {@link RosStagingConfigProps#getFunctions}
         * @param functions the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder functions(java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> functions) {
            this.functions = functions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosStagingConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosStagingConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosStagingConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosStagingConfigProps {
        private final java.lang.Object domainName;
        private final java.lang.Object functions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domainName = software.amazon.jsii.Kernel.get(this, "domainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.functions = software.amazon.jsii.Kernel.get(this, "functions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domainName = java.util.Objects.requireNonNull(builder.domainName, "domainName is required");
            this.functions = java.util.Objects.requireNonNull(builder.functions, "functions is required");
        }

        @Override
        public final java.lang.Object getDomainName() {
            return this.domainName;
        }

        @Override
        public final java.lang.Object getFunctions() {
            return this.functions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("domainName", om.valueToTree(this.getDomainName()));
            data.set("functions", om.valueToTree(this.getFunctions()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cdn.RosStagingConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosStagingConfigProps.Jsii$Proxy that = (RosStagingConfigProps.Jsii$Proxy) o;

            if (!domainName.equals(that.domainName)) return false;
            return this.functions.equals(that.functions);
        }

        @Override
        public final int hashCode() {
            int result = this.domainName.hashCode();
            result = 31 * result + (this.functions.hashCode());
            return result;
        }
    }
}
