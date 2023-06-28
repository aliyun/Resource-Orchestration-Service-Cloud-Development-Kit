package com.aliyun.ros.cdk.core;

/**
 * A single dependency.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-28T08:22:26.385Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.Dependency")
@software.amazon.jsii.Jsii.Proxy(Dependency.Jsii$Proxy.class)
public interface Dependency extends software.amazon.jsii.JsiiSerializable {

    /**
     * Source the dependency.
     */
    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IConstruct getSource();

    /**
     * Target of the dependency.
     */
    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IConstruct getTarget();

    /**
     * @return a {@link Builder} of {@link Dependency}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link Dependency}
     */
    public static final class Builder implements software.amazon.jsii.Builder<Dependency> {
        com.aliyun.ros.cdk.core.IConstruct source;
        com.aliyun.ros.cdk.core.IConstruct target;

        /**
         * Sets the value of {@link Dependency#getSource}
         * @param source Source the dependency. This parameter is required.
         * @return {@code this}
         */
        public Builder source(com.aliyun.ros.cdk.core.IConstruct source) {
            this.source = source;
            return this;
        }

        /**
         * Sets the value of {@link Dependency#getTarget}
         * @param target Target of the dependency. This parameter is required.
         * @return {@code this}
         */
        public Builder target(com.aliyun.ros.cdk.core.IConstruct target) {
            this.target = target;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link Dependency}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public Dependency build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link Dependency}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements Dependency {
        private final com.aliyun.ros.cdk.core.IConstruct source;
        private final com.aliyun.ros.cdk.core.IConstruct target;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.source = software.amazon.jsii.Kernel.get(this, "source", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IConstruct.class));
            this.target = software.amazon.jsii.Kernel.get(this, "target", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IConstruct.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.source = java.util.Objects.requireNonNull(builder.source, "source is required");
            this.target = java.util.Objects.requireNonNull(builder.target, "target is required");
        }

        @Override
        public final com.aliyun.ros.cdk.core.IConstruct getSource() {
            return this.source;
        }

        @Override
        public final com.aliyun.ros.cdk.core.IConstruct getTarget() {
            return this.target;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("source", om.valueToTree(this.getSource()));
            data.set("target", om.valueToTree(this.getTarget()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.Dependency"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            Dependency.Jsii$Proxy that = (Dependency.Jsii$Proxy) o;

            if (!source.equals(that.source)) return false;
            return this.target.equals(that.target);
        }

        @Override
        public final int hashCode() {
            int result = this.source.hashCode();
            result = 31 * result + (this.target.hashCode());
            return result;
        }
    }
}
