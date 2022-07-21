package com.aliyun.ros.cdk.assembly.schema;

/**
 * Represents a missing piece of context.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-21T02:24:23.373Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.MissingContext")
@software.amazon.jsii.Jsii.Proxy(MissingContext.Jsii$Proxy.class)
public interface MissingContext extends software.amazon.jsii.JsiiSerializable {

    /**
     * The missing context key.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getKey();

    /**
     * A set of provider-specific options.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProps();

    /**
     * The provider from which we expect this context key to be obtained.
     */
    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.assembly.schema.ContextProvider getProvider();

    /**
     * @return a {@link Builder} of {@link MissingContext}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link MissingContext}
     */
    public static final class Builder implements software.amazon.jsii.Builder<MissingContext> {
        java.lang.String key;
        java.lang.Object props;
        com.aliyun.ros.cdk.assembly.schema.ContextProvider provider;

        /**
         * Sets the value of {@link MissingContext#getKey}
         * @param key The missing context key. This parameter is required.
         * @return {@code this}
         */
        public Builder key(java.lang.String key) {
            this.key = key;
            return this;
        }

        /**
         * Sets the value of {@link MissingContext#getProps}
         * @param props A set of provider-specific options. This parameter is required.
         * @return {@code this}
         */
        public Builder props(com.aliyun.ros.cdk.assembly.schema.AmiContextQuery props) {
            this.props = props;
            return this;
        }

        /**
         * Sets the value of {@link MissingContext#getProps}
         * @param props A set of provider-specific options. This parameter is required.
         * @return {@code this}
         */
        public Builder props(com.aliyun.ros.cdk.assembly.schema.AvailabilityZonesContextQuery props) {
            this.props = props;
            return this;
        }

        /**
         * Sets the value of {@link MissingContext#getProps}
         * @param props A set of provider-specific options. This parameter is required.
         * @return {@code this}
         */
        public Builder props(com.aliyun.ros.cdk.assembly.schema.HostedZoneContextQuery props) {
            this.props = props;
            return this;
        }

        /**
         * Sets the value of {@link MissingContext#getProps}
         * @param props A set of provider-specific options. This parameter is required.
         * @return {@code this}
         */
        public Builder props(com.aliyun.ros.cdk.assembly.schema.SSMParameterContextQuery props) {
            this.props = props;
            return this;
        }

        /**
         * Sets the value of {@link MissingContext#getProps}
         * @param props A set of provider-specific options. This parameter is required.
         * @return {@code this}
         */
        public Builder props(com.aliyun.ros.cdk.assembly.schema.VpcContextQuery props) {
            this.props = props;
            return this;
        }

        /**
         * Sets the value of {@link MissingContext#getProps}
         * @param props A set of provider-specific options. This parameter is required.
         * @return {@code this}
         */
        public Builder props(com.aliyun.ros.cdk.assembly.schema.EndpointServiceAvailabilityZonesContextQuery props) {
            this.props = props;
            return this;
        }

        /**
         * Sets the value of {@link MissingContext#getProvider}
         * @param provider The provider from which we expect this context key to be obtained. This parameter is required.
         * @return {@code this}
         */
        public Builder provider(com.aliyun.ros.cdk.assembly.schema.ContextProvider provider) {
            this.provider = provider;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link MissingContext}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public MissingContext build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link MissingContext}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MissingContext {
        private final java.lang.String key;
        private final java.lang.Object props;
        private final com.aliyun.ros.cdk.assembly.schema.ContextProvider provider;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.props = software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.provider = software.amazon.jsii.Kernel.get(this, "provider", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.assembly.schema.ContextProvider.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
            this.props = java.util.Objects.requireNonNull(builder.props, "props is required");
            this.provider = java.util.Objects.requireNonNull(builder.provider, "provider is required");
        }

        @Override
        public final java.lang.String getKey() {
            return this.key;
        }

        @Override
        public final java.lang.Object getProps() {
            return this.props;
        }

        @Override
        public final com.aliyun.ros.cdk.assembly.schema.ContextProvider getProvider() {
            return this.provider;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("key", om.valueToTree(this.getKey()));
            data.set("props", om.valueToTree(this.getProps()));
            data.set("provider", om.valueToTree(this.getProvider()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-assembly-schema.MissingContext"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            MissingContext.Jsii$Proxy that = (MissingContext.Jsii$Proxy) o;

            if (!key.equals(that.key)) return false;
            if (!props.equals(that.props)) return false;
            return this.provider.equals(that.provider);
        }

        @Override
        public final int hashCode() {
            int result = this.key.hashCode();
            result = 31 * result + (this.props.hashCode());
            result = 31 * result + (this.provider.hashCode());
            return result;
        }
    }
}
