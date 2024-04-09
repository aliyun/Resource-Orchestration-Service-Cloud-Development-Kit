package com.aliyun.ros.cdk.resourcemanager;

/**
 * Properties for defining a <code>RosResourceShare</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshare
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:34.990Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.RosResourceShareProps")
@software.amazon.jsii.Jsii.Proxy(RosResourceShareProps.Jsii$Proxy.class)
public interface RosResourceShareProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResourceShareName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllowExternalTargets() {
        return null;
    }

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
     * @return a {@link Builder} of {@link RosResourceShareProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosResourceShareProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosResourceShareProps> {
        java.lang.Object resourceShareName;
        java.lang.Object allowExternalTargets;
        java.lang.Object permissionNames;
        java.lang.Object resources;
        java.lang.Object targets;

        /**
         * Sets the value of {@link RosResourceShareProps#getResourceShareName}
         * @param resourceShareName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceShareName(java.lang.String resourceShareName) {
            this.resourceShareName = resourceShareName;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceShareProps#getResourceShareName}
         * @param resourceShareName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceShareName(com.aliyun.ros.cdk.core.IResolvable resourceShareName) {
            this.resourceShareName = resourceShareName;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceShareProps#getAllowExternalTargets}
         * @param allowExternalTargets the value to be set.
         * @return {@code this}
         */
        public Builder allowExternalTargets(java.lang.Boolean allowExternalTargets) {
            this.allowExternalTargets = allowExternalTargets;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceShareProps#getAllowExternalTargets}
         * @param allowExternalTargets the value to be set.
         * @return {@code this}
         */
        public Builder allowExternalTargets(com.aliyun.ros.cdk.core.IResolvable allowExternalTargets) {
            this.allowExternalTargets = allowExternalTargets;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceShareProps#getPermissionNames}
         * @param permissionNames the value to be set.
         * @return {@code this}
         */
        public Builder permissionNames(com.aliyun.ros.cdk.core.IResolvable permissionNames) {
            this.permissionNames = permissionNames;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceShareProps#getPermissionNames}
         * @param permissionNames the value to be set.
         * @return {@code this}
         */
        public Builder permissionNames(java.util.List<? extends java.lang.Object> permissionNames) {
            this.permissionNames = permissionNames;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceShareProps#getResources}
         * @param resources the value to be set.
         * @return {@code this}
         */
        public Builder resources(com.aliyun.ros.cdk.core.IResolvable resources) {
            this.resources = resources;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceShareProps#getResources}
         * @param resources the value to be set.
         * @return {@code this}
         */
        public Builder resources(java.util.List<? extends java.lang.Object> resources) {
            this.resources = resources;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceShareProps#getTargets}
         * @param targets the value to be set.
         * @return {@code this}
         */
        public Builder targets(com.aliyun.ros.cdk.core.IResolvable targets) {
            this.targets = targets;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceShareProps#getTargets}
         * @param targets the value to be set.
         * @return {@code this}
         */
        public Builder targets(java.util.List<? extends java.lang.Object> targets) {
            this.targets = targets;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosResourceShareProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosResourceShareProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosResourceShareProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosResourceShareProps {
        private final java.lang.Object resourceShareName;
        private final java.lang.Object allowExternalTargets;
        private final java.lang.Object permissionNames;
        private final java.lang.Object resources;
        private final java.lang.Object targets;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.resourceShareName = software.amazon.jsii.Kernel.get(this, "resourceShareName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.allowExternalTargets = software.amazon.jsii.Kernel.get(this, "allowExternalTargets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.permissionNames = software.amazon.jsii.Kernel.get(this, "permissionNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resources = software.amazon.jsii.Kernel.get(this, "resources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targets = software.amazon.jsii.Kernel.get(this, "targets", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.resourceShareName = java.util.Objects.requireNonNull(builder.resourceShareName, "resourceShareName is required");
            this.allowExternalTargets = builder.allowExternalTargets;
            this.permissionNames = builder.permissionNames;
            this.resources = builder.resources;
            this.targets = builder.targets;
        }

        @Override
        public final java.lang.Object getResourceShareName() {
            return this.resourceShareName;
        }

        @Override
        public final java.lang.Object getAllowExternalTargets() {
            return this.allowExternalTargets;
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

            data.set("resourceShareName", om.valueToTree(this.getResourceShareName()));
            if (this.getAllowExternalTargets() != null) {
                data.set("allowExternalTargets", om.valueToTree(this.getAllowExternalTargets()));
            }
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-resourcemanager.RosResourceShareProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosResourceShareProps.Jsii$Proxy that = (RosResourceShareProps.Jsii$Proxy) o;

            if (!resourceShareName.equals(that.resourceShareName)) return false;
            if (this.allowExternalTargets != null ? !this.allowExternalTargets.equals(that.allowExternalTargets) : that.allowExternalTargets != null) return false;
            if (this.permissionNames != null ? !this.permissionNames.equals(that.permissionNames) : that.permissionNames != null) return false;
            if (this.resources != null ? !this.resources.equals(that.resources) : that.resources != null) return false;
            return this.targets != null ? this.targets.equals(that.targets) : that.targets == null;
        }

        @Override
        public final int hashCode() {
            int result = this.resourceShareName.hashCode();
            result = 31 * result + (this.allowExternalTargets != null ? this.allowExternalTargets.hashCode() : 0);
            result = 31 * result + (this.permissionNames != null ? this.permissionNames.hashCode() : 0);
            result = 31 * result + (this.resources != null ? this.resources.hashCode() : 0);
            result = 31 * result + (this.targets != null ? this.targets.hashCode() : 0);
            return result;
        }
    }
}
