package com.aliyun.ros.cdk.resourcemanager;

/**
 * Properties for defining a <code>ALIYUN::ResourceManager::ResourceShare</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:27.997Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.ResourceShareProps")
@software.amazon.jsii.Jsii.Proxy(ResourceShareProps.Jsii$Proxy.class)
public interface ResourceShareProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property resourceShareName: The name of the resource share.
     * <p>
     * The name must be 1 to 50 characters in length.
     * It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResourceShareName();

    /**
     * Property resources:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResources() {
        return null;
    }

    /**
     * Property targets: The shared target.
     * <p>
     * A shared target shares the resources of resource owners. You can share your resources
     * only with the member accounts in your resource directory. A shared target is indicated
     * by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTargets() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ResourceShareProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ResourceShareProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ResourceShareProps> {
        java.lang.Object resourceShareName;
        java.lang.Object resources;
        java.lang.Object targets;

        /**
         * Sets the value of {@link ResourceShareProps#getResourceShareName}
         * @param resourceShareName Property resourceShareName: The name of the resource share. This parameter is required.
         *                          The name must be 1 to 50 characters in length.
         *                          It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
         * @return {@code this}
         */
        public Builder resourceShareName(java.lang.String resourceShareName) {
            this.resourceShareName = resourceShareName;
            return this;
        }

        /**
         * Sets the value of {@link ResourceShareProps#getResourceShareName}
         * @param resourceShareName Property resourceShareName: The name of the resource share. This parameter is required.
         *                          The name must be 1 to 50 characters in length.
         *                          It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
         * @return {@code this}
         */
        public Builder resourceShareName(com.aliyun.ros.cdk.core.IResolvable resourceShareName) {
            this.resourceShareName = resourceShareName;
            return this;
        }

        /**
         * Sets the value of {@link ResourceShareProps#getResources}
         * @param resources Property resources:.
         * @return {@code this}
         */
        public Builder resources(com.aliyun.ros.cdk.core.IResolvable resources) {
            this.resources = resources;
            return this;
        }

        /**
         * Sets the value of {@link ResourceShareProps#getResources}
         * @param resources Property resources:.
         * @return {@code this}
         */
        public Builder resources(java.util.List<? extends java.lang.Object> resources) {
            this.resources = resources;
            return this;
        }

        /**
         * Sets the value of {@link ResourceShareProps#getTargets}
         * @param targets Property targets: The shared target.
         *                A shared target shares the resources of resource owners. You can share your resources
         *                only with the member accounts in your resource directory. A shared target is indicated
         *                by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
         * @return {@code this}
         */
        public Builder targets(com.aliyun.ros.cdk.core.IResolvable targets) {
            this.targets = targets;
            return this;
        }

        /**
         * Sets the value of {@link ResourceShareProps#getTargets}
         * @param targets Property targets: The shared target.
         *                A shared target shares the resources of resource owners. You can share your resources
         *                only with the member accounts in your resource directory. A shared target is indicated
         *                by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
         * @return {@code this}
         */
        public Builder targets(java.util.List<? extends java.lang.Object> targets) {
            this.targets = targets;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ResourceShareProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ResourceShareProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ResourceShareProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResourceShareProps {
        private final java.lang.Object resourceShareName;
        private final java.lang.Object resources;
        private final java.lang.Object targets;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.resourceShareName = software.amazon.jsii.Kernel.get(this, "resourceShareName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resources = software.amazon.jsii.Kernel.get(this, "resources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targets = software.amazon.jsii.Kernel.get(this, "targets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.resourceShareName = java.util.Objects.requireNonNull(builder.resourceShareName, "resourceShareName is required");
            this.resources = builder.resources;
            this.targets = builder.targets;
        }

        @Override
        public final java.lang.Object getResourceShareName() {
            return this.resourceShareName;
        }

        @Override
        public final java.lang.Object getResources() {
            return this.resources;
        }

        @Override
        public final java.lang.Object getTargets() {
            return this.targets;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("resourceShareName", om.valueToTree(this.getResourceShareName()));
            if (this.getResources() != null) {
                data.set("resources", om.valueToTree(this.getResources()));
            }
            if (this.getTargets() != null) {
                data.set("targets", om.valueToTree(this.getTargets()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-resourcemanager.ResourceShareProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ResourceShareProps.Jsii$Proxy that = (ResourceShareProps.Jsii$Proxy) o;

            if (!resourceShareName.equals(that.resourceShareName)) return false;
            if (this.resources != null ? !this.resources.equals(that.resources) : that.resources != null) return false;
            return this.targets != null ? this.targets.equals(that.targets) : that.targets == null;
        }

        @Override
        public final int hashCode() {
            int result = this.resourceShareName.hashCode();
            result = 31 * result + (this.resources != null ? this.resources.hashCode() : 0);
            result = 31 * result + (this.targets != null ? this.targets.hashCode() : 0);
            return result;
        }
    }
}
