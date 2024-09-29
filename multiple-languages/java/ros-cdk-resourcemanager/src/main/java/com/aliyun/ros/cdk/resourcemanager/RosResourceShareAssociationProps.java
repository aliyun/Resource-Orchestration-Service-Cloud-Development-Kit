package com.aliyun.ros.cdk.resourcemanager;

/**
 * Properties for defining a <code>RosResourceShareAssociation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshareassociation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:42.205Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.RosResourceShareAssociationProps")
@software.amazon.jsii.Jsii.Proxy(RosResourceShareAssociationProps.Jsii$Proxy.class)
public interface RosResourceShareAssociationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResourceShareId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPermissionNames() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResources() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTargets() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosResourceShareAssociationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosResourceShareAssociationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosResourceShareAssociationProps> {
        java.lang.Object resourceShareId;
        java.lang.Object permissionNames;
        java.lang.Object resources;
        java.lang.Object targets;

        /**
         * Sets the value of {@link RosResourceShareAssociationProps#getResourceShareId}
         * @param resourceShareId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceShareId(java.lang.String resourceShareId) {
            this.resourceShareId = resourceShareId;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceShareAssociationProps#getResourceShareId}
         * @param resourceShareId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceShareId(com.aliyun.ros.cdk.core.IResolvable resourceShareId) {
            this.resourceShareId = resourceShareId;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceShareAssociationProps#getPermissionNames}
         * @param permissionNames the value to be set.
         * @return {@code this}
         */
        public Builder permissionNames(com.aliyun.ros.cdk.core.IResolvable permissionNames) {
            this.permissionNames = permissionNames;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceShareAssociationProps#getPermissionNames}
         * @param permissionNames the value to be set.
         * @return {@code this}
         */
        public Builder permissionNames(java.util.List<? extends java.lang.Object> permissionNames) {
            this.permissionNames = permissionNames;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceShareAssociationProps#getResources}
         * @param resources the value to be set.
         * @return {@code this}
         */
        public Builder resources(com.aliyun.ros.cdk.core.IResolvable resources) {
            this.resources = resources;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceShareAssociationProps#getResources}
         * @param resources the value to be set.
         * @return {@code this}
         */
        public Builder resources(java.util.List<? extends java.lang.Object> resources) {
            this.resources = resources;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceShareAssociationProps#getTargets}
         * @param targets the value to be set.
         * @return {@code this}
         */
        public Builder targets(com.aliyun.ros.cdk.core.IResolvable targets) {
            this.targets = targets;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceShareAssociationProps#getTargets}
         * @param targets the value to be set.
         * @return {@code this}
         */
        public Builder targets(java.util.List<? extends java.lang.Object> targets) {
            this.targets = targets;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosResourceShareAssociationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosResourceShareAssociationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosResourceShareAssociationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosResourceShareAssociationProps {
        private final java.lang.Object resourceShareId;
        private final java.lang.Object permissionNames;
        private final java.lang.Object resources;
        private final java.lang.Object targets;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.resourceShareId = software.amazon.jsii.Kernel.get(this, "resourceShareId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.permissionNames = software.amazon.jsii.Kernel.get(this, "permissionNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resources = software.amazon.jsii.Kernel.get(this, "resources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targets = software.amazon.jsii.Kernel.get(this, "targets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.resourceShareId = java.util.Objects.requireNonNull(builder.resourceShareId, "resourceShareId is required");
            this.permissionNames = builder.permissionNames;
            this.resources = builder.resources;
            this.targets = builder.targets;
        }

        @Override
        public final java.lang.Object getResourceShareId() {
            return this.resourceShareId;
        }

        @Override
        public final java.lang.Object getPermissionNames() {
            return this.permissionNames;
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

            data.set("resourceShareId", om.valueToTree(this.getResourceShareId()));
            if (this.getPermissionNames() != null) {
                data.set("permissionNames", om.valueToTree(this.getPermissionNames()));
            }
            if (this.getResources() != null) {
                data.set("resources", om.valueToTree(this.getResources()));
            }
            if (this.getTargets() != null) {
                data.set("targets", om.valueToTree(this.getTargets()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-resourcemanager.RosResourceShareAssociationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosResourceShareAssociationProps.Jsii$Proxy that = (RosResourceShareAssociationProps.Jsii$Proxy) o;

            if (!resourceShareId.equals(that.resourceShareId)) return false;
            if (this.permissionNames != null ? !this.permissionNames.equals(that.permissionNames) : that.permissionNames != null) return false;
            if (this.resources != null ? !this.resources.equals(that.resources) : that.resources != null) return false;
            return this.targets != null ? this.targets.equals(that.targets) : that.targets == null;
        }

        @Override
        public final int hashCode() {
            int result = this.resourceShareId.hashCode();
            result = 31 * result + (this.permissionNames != null ? this.permissionNames.hashCode() : 0);
            result = 31 * result + (this.resources != null ? this.resources.hashCode() : 0);
            result = 31 * result + (this.targets != null ? this.targets.hashCode() : 0);
            return result;
        }
    }
}
