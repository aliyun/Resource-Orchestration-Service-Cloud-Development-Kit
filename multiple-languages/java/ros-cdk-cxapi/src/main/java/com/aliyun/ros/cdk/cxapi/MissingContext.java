package com.aliyun.ros.cdk.cxapi;

/**
 * (deprecated) Backwards compatibility for when 'MissingContext' was defined here.
 * <p>
 * This is necessary because its used as an input in the stable
 * <p>
 * @see core.Stack.reportMissingContext
 * @deprecated moved to package 'ros-assembly-schema'
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-18T07:25:24.349Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cxapi.$Module.class, fqn = "@alicloud/ros-cdk-cxapi.MissingContext")
@software.amazon.jsii.Jsii.Proxy(MissingContext.Jsii$Proxy.class)
@software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
@Deprecated
public interface MissingContext extends software.amazon.jsii.JsiiSerializable {

    /**
     * (deprecated) The missing context key.
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
    @Deprecated
    @org.jetbrains.annotations.NotNull java.lang.String getKey();

    /**
     * (deprecated) A set of provider-specific options.
     * <p>
     * (This is the old untyped definition, which is necessary for backwards compatibility.
     * See cxschema for a type definition.)
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
    @Deprecated
    @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getProps();

    /**
     * (deprecated) The provider from which we expect this context key to be obtained.
     * <p>
     * (This is the old untyped definition, which is necessary for backwards compatibility.
     * See cxschema for a type definition.)
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
    @Deprecated
    @org.jetbrains.annotations.NotNull java.lang.String getProvider();

    /**
     * @return a {@link Builder} of {@link MissingContext}
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
    @Deprecated
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link MissingContext}
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
    @Deprecated
    public static final class Builder implements software.amazon.jsii.Builder<MissingContext> {
        java.lang.String key;
        java.util.Map<java.lang.String, java.lang.Object> props;
        java.lang.String provider;

        /**
         * Sets the value of {@link MissingContext#getKey}
         * @param key The missing context key. This parameter is required.
         * @return {@code this}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
        @Deprecated
        public Builder key(java.lang.String key) {
            this.key = key;
            return this;
        }

        /**
         * Sets the value of {@link MissingContext#getProps}
         * @param props A set of provider-specific options. This parameter is required.
         *              (This is the old untyped definition, which is necessary for backwards compatibility.
         *              See cxschema for a type definition.)
         * @return {@code this}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
        @Deprecated
        @SuppressWarnings("unchecked")
        public Builder props(java.util.Map<java.lang.String, ? extends java.lang.Object> props) {
            this.props = (java.util.Map<java.lang.String, java.lang.Object>)props;
            return this;
        }

        /**
         * Sets the value of {@link MissingContext#getProvider}
         * @param provider The provider from which we expect this context key to be obtained. This parameter is required.
         *                 (This is the old untyped definition, which is necessary for backwards compatibility.
         *                 See cxschema for a type definition.)
         * @return {@code this}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
        @Deprecated
        public Builder provider(java.lang.String provider) {
            this.provider = provider;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link MissingContext}
         * @throws NullPointerException if any required attribute was not provided
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
        @Deprecated
        @Override
        public MissingContext build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link MissingContext}
     */
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Deprecated)
    @Deprecated
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MissingContext {
        private final java.lang.String key;
        private final java.util.Map<java.lang.String, java.lang.Object> props;
        private final java.lang.String provider;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.props = software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)));
            this.provider = software.amazon.jsii.Kernel.get(this, "provider", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
            this.props = (java.util.Map<java.lang.String, java.lang.Object>)java.util.Objects.requireNonNull(builder.props, "props is required");
            this.provider = java.util.Objects.requireNonNull(builder.provider, "provider is required");
        }

        @Override
        public final java.lang.String getKey() {
            return this.key;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.Object> getProps() {
            return this.props;
        }

        @Override
        public final java.lang.String getProvider() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cxapi.MissingContext"));
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
