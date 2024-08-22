package com.aliyun.ros.cdk.core;

/**
 * Options to the resolve() operation.
 * <p>
 * NOT the same as the ResolveContext; ResolveContext is exposed to Token
 * implementors and resolution hooks, whereas this struct is just to bundle
 * a number of things that would otherwise be arguments to resolve() in a
 * readable way.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:17.041Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.ResolveOptions")
@software.amazon.jsii.Jsii.Proxy(ResolveOptions.Jsii$Proxy.class)
public interface ResolveOptions extends software.amazon.jsii.JsiiSerializable {

    /**
     * The resolver to apply to any resolvable tokens found.
     */
    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ITokenResolver getResolver();

    /**
     * The scope from which resolution is performed.
     */
    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IConstruct getScope();

    /**
     * Whether the resolution is being executed during the prepare phase or not.
     * <p>
     * Default: false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Boolean getPreparing() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ResolveOptions}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ResolveOptions}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ResolveOptions> {
        com.aliyun.ros.cdk.core.ITokenResolver resolver;
        com.aliyun.ros.cdk.core.IConstruct scope;
        java.lang.Boolean preparing;

        /**
         * Sets the value of {@link ResolveOptions#getResolver}
         * @param resolver The resolver to apply to any resolvable tokens found. This parameter is required.
         * @return {@code this}
         */
        public Builder resolver(com.aliyun.ros.cdk.core.ITokenResolver resolver) {
            this.resolver = resolver;
            return this;
        }

        /**
         * Sets the value of {@link ResolveOptions#getScope}
         * @param scope The scope from which resolution is performed. This parameter is required.
         * @return {@code this}
         */
        public Builder scope(com.aliyun.ros.cdk.core.IConstruct scope) {
            this.scope = scope;
            return this;
        }

        /**
         * Sets the value of {@link ResolveOptions#getPreparing}
         * @param preparing Whether the resolution is being executed during the prepare phase or not.
         * @return {@code this}
         */
        public Builder preparing(java.lang.Boolean preparing) {
            this.preparing = preparing;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ResolveOptions}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ResolveOptions build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ResolveOptions}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResolveOptions {
        private final com.aliyun.ros.cdk.core.ITokenResolver resolver;
        private final com.aliyun.ros.cdk.core.IConstruct scope;
        private final java.lang.Boolean preparing;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.resolver = software.amazon.jsii.Kernel.get(this, "resolver", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ITokenResolver.class));
            this.scope = software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IConstruct.class));
            this.preparing = software.amazon.jsii.Kernel.get(this, "preparing", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.resolver = java.util.Objects.requireNonNull(builder.resolver, "resolver is required");
            this.scope = java.util.Objects.requireNonNull(builder.scope, "scope is required");
            this.preparing = builder.preparing;
        }

        @Override
        public final com.aliyun.ros.cdk.core.ITokenResolver getResolver() {
            return this.resolver;
        }

        @Override
        public final com.aliyun.ros.cdk.core.IConstruct getScope() {
            return this.scope;
        }

        @Override
        public final java.lang.Boolean getPreparing() {
            return this.preparing;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("resolver", om.valueToTree(this.getResolver()));
            data.set("scope", om.valueToTree(this.getScope()));
            if (this.getPreparing() != null) {
                data.set("preparing", om.valueToTree(this.getPreparing()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.ResolveOptions"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ResolveOptions.Jsii$Proxy that = (ResolveOptions.Jsii$Proxy) o;

            if (!resolver.equals(that.resolver)) return false;
            if (!scope.equals(that.scope)) return false;
            return this.preparing != null ? this.preparing.equals(that.preparing) : that.preparing == null;
        }

        @Override
        public final int hashCode() {
            int result = this.resolver.hashCode();
            result = 31 * result + (this.scope.hashCode());
            result = 31 * result + (this.preparing != null ? this.preparing.hashCode() : 0);
            return result;
        }
    }
}
