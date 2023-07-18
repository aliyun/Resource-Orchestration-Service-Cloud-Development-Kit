package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>ALIYUN::ECS::HpcCluster</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-18T08:28:01.150Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.HpcClusterProps")
@software.amazon.jsii.Jsii.Proxy(HpcClusterProps.Jsii$Proxy.class)
public interface HpcClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property name: The name of the HPC cluster.
     * <p>
     * The name must be 2 to 128 characters in length. It must
     * start with a letter but cannot start with http:// or https://. It can contain letters,
     * digits, colons (:), underscores (_), and hyphens (-).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property description: The description of the HPC cluster.
     * <p>
     * The description must be 2 to 256 characters in
     * length. It cannot start with http:// or https://. Default value: empty string.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link HpcClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link HpcClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<HpcClusterProps> {
        java.lang.Object name;
        java.lang.Object description;

        /**
         * Sets the value of {@link HpcClusterProps#getName}
         * @param name Property name: The name of the HPC cluster. This parameter is required.
         *             The name must be 2 to 128 characters in length. It must
         *             start with a letter but cannot start with http:// or https://. It can contain letters,
         *             digits, colons (:), underscores (_), and hyphens (-).
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link HpcClusterProps#getName}
         * @param name Property name: The name of the HPC cluster. This parameter is required.
         *             The name must be 2 to 128 characters in length. It must
         *             start with a letter but cannot start with http:// or https://. It can contain letters,
         *             digits, colons (:), underscores (_), and hyphens (-).
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link HpcClusterProps#getDescription}
         * @param description Property description: The description of the HPC cluster.
         *                    The description must be 2 to 256 characters in
         *                    length. It cannot start with http:// or https://. Default value: empty string.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link HpcClusterProps#getDescription}
         * @param description Property description: The description of the HPC cluster.
         *                    The description must be 2 to 256 characters in
         *                    length. It cannot start with http:// or https://. Default value: empty string.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link HpcClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public HpcClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link HpcClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HpcClusterProps {
        private final java.lang.Object name;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("name", om.valueToTree(this.getName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.HpcClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            HpcClusterProps.Jsii$Proxy that = (HpcClusterProps.Jsii$Proxy) o;

            if (!name.equals(that.name)) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.name.hashCode();
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
