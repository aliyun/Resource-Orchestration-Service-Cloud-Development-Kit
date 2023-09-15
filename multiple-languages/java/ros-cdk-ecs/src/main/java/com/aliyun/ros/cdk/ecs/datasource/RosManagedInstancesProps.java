package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>DATASOURCE::ECS::ManagedInstances</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:48.220Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.RosManagedInstancesProps")
@software.amazon.jsii.Jsii.Proxy(RosManagedInstancesProps.Jsii$Proxy.class)
public interface RosManagedInstancesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getActivationId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceIp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOsType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosManagedInstances.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosManagedInstancesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosManagedInstancesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosManagedInstancesProps> {
        java.lang.Object activationId;
        java.lang.Object instanceId;
        java.lang.Object instanceIp;
        java.lang.Object instanceName;
        java.lang.Object osType;
        java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosManagedInstances.TagsProperty> tags;

        /**
         * Sets the value of {@link RosManagedInstancesProps#getActivationId}
         * @param activationId the value to be set.
         * @return {@code this}
         */
        public Builder activationId(java.lang.String activationId) {
            this.activationId = activationId;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedInstancesProps#getActivationId}
         * @param activationId the value to be set.
         * @return {@code this}
         */
        public Builder activationId(com.aliyun.ros.cdk.core.IResolvable activationId) {
            this.activationId = activationId;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedInstancesProps#getInstanceId}
         * @param instanceId the value to be set.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedInstancesProps#getInstanceId}
         * @param instanceId the value to be set.
         * @return {@code this}
         */
        public Builder instanceId(java.util.List<? extends java.lang.Object> instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedInstancesProps#getInstanceIp}
         * @param instanceIp the value to be set.
         * @return {@code this}
         */
        public Builder instanceIp(java.lang.String instanceIp) {
            this.instanceIp = instanceIp;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedInstancesProps#getInstanceIp}
         * @param instanceIp the value to be set.
         * @return {@code this}
         */
        public Builder instanceIp(com.aliyun.ros.cdk.core.IResolvable instanceIp) {
            this.instanceIp = instanceIp;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedInstancesProps#getInstanceName}
         * @param instanceName the value to be set.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedInstancesProps#getInstanceName}
         * @param instanceName the value to be set.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedInstancesProps#getOsType}
         * @param osType the value to be set.
         * @return {@code this}
         */
        public Builder osType(java.lang.String osType) {
            this.osType = osType;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedInstancesProps#getOsType}
         * @param osType the value to be set.
         * @return {@code this}
         */
        public Builder osType(com.aliyun.ros.cdk.core.IResolvable osType) {
            this.osType = osType;
            return this;
        }

        /**
         * Sets the value of {@link RosManagedInstancesProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.datasource.RosManagedInstances.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosManagedInstances.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosManagedInstancesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosManagedInstancesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosManagedInstancesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosManagedInstancesProps {
        private final java.lang.Object activationId;
        private final java.lang.Object instanceId;
        private final java.lang.Object instanceIp;
        private final java.lang.Object instanceName;
        private final java.lang.Object osType;
        private final java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosManagedInstances.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.activationId = software.amazon.jsii.Kernel.get(this, "activationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceIp = software.amazon.jsii.Kernel.get(this, "instanceIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.osType = software.amazon.jsii.Kernel.get(this, "osType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.RosManagedInstances.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.activationId = builder.activationId;
            this.instanceId = builder.instanceId;
            this.instanceIp = builder.instanceIp;
            this.instanceName = builder.instanceName;
            this.osType = builder.osType;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosManagedInstances.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getActivationId() {
            return this.activationId;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getInstanceIp() {
            return this.instanceIp;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getOsType() {
            return this.osType;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosManagedInstances.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getActivationId() != null) {
                data.set("activationId", om.valueToTree(this.getActivationId()));
            }
            if (this.getInstanceId() != null) {
                data.set("instanceId", om.valueToTree(this.getInstanceId()));
            }
            if (this.getInstanceIp() != null) {
                data.set("instanceIp", om.valueToTree(this.getInstanceIp()));
            }
            if (this.getInstanceName() != null) {
                data.set("instanceName", om.valueToTree(this.getInstanceName()));
            }
            if (this.getOsType() != null) {
                data.set("osType", om.valueToTree(this.getOsType()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.RosManagedInstancesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosManagedInstancesProps.Jsii$Proxy that = (RosManagedInstancesProps.Jsii$Proxy) o;

            if (this.activationId != null ? !this.activationId.equals(that.activationId) : that.activationId != null) return false;
            if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
            if (this.instanceIp != null ? !this.instanceIp.equals(that.instanceIp) : that.instanceIp != null) return false;
            if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
            if (this.osType != null ? !this.osType.equals(that.osType) : that.osType != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.activationId != null ? this.activationId.hashCode() : 0;
            result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
            result = 31 * result + (this.instanceIp != null ? this.instanceIp.hashCode() : 0);
            result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
            result = 31 * result + (this.osType != null ? this.osType.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
