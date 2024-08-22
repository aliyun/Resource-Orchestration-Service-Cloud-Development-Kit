package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>ManagedInstances</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-managedinstances
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:20.522Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.ManagedInstancesProps")
@software.amazon.jsii.Jsii.Proxy(ManagedInstancesProps.Jsii$Proxy.class)
public interface ManagedInstancesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property activationId: The ID of the activation code.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getActivationId() {
        return null;
    }

    /**
     * Property instanceId: The ID of managed instance.
     * <p>
     * Valid values of N: 1 to 50.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     * Property instanceIp: The internal or public IP address of the managed instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceIp() {
        return null;
    }

    /**
     * Property instanceName: The name of the managed instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return null;
    }

    /**
     * Property osType: The operating system type of the managed instance.
     * <p>
     * Valid values:
     * windows
     * linux
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOsType() {
        return null;
    }

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * Property tags: Tags of managedinstance.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosManagedInstances.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ManagedInstancesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ManagedInstancesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ManagedInstancesProps> {
        java.lang.Object activationId;
        java.lang.Object instanceId;
        java.lang.Object instanceIp;
        java.lang.Object instanceName;
        java.lang.Object osType;
        java.lang.Object refreshOptions;
        java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosManagedInstances.TagsProperty> tags;

        /**
         * Sets the value of {@link ManagedInstancesProps#getActivationId}
         * @param activationId Property activationId: The ID of the activation code.
         * @return {@code this}
         */
        public Builder activationId(java.lang.String activationId) {
            this.activationId = activationId;
            return this;
        }

        /**
         * Sets the value of {@link ManagedInstancesProps#getActivationId}
         * @param activationId Property activationId: The ID of the activation code.
         * @return {@code this}
         */
        public Builder activationId(com.aliyun.ros.cdk.core.IResolvable activationId) {
            this.activationId = activationId;
            return this;
        }

        /**
         * Sets the value of {@link ManagedInstancesProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of managed instance.
         *                   Valid values of N: 1 to 50.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link ManagedInstancesProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of managed instance.
         *                   Valid values of N: 1 to 50.
         * @return {@code this}
         */
        public Builder instanceId(java.util.List<? extends java.lang.Object> instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link ManagedInstancesProps#getInstanceIp}
         * @param instanceIp Property instanceIp: The internal or public IP address of the managed instance.
         * @return {@code this}
         */
        public Builder instanceIp(java.lang.String instanceIp) {
            this.instanceIp = instanceIp;
            return this;
        }

        /**
         * Sets the value of {@link ManagedInstancesProps#getInstanceIp}
         * @param instanceIp Property instanceIp: The internal or public IP address of the managed instance.
         * @return {@code this}
         */
        public Builder instanceIp(com.aliyun.ros.cdk.core.IResolvable instanceIp) {
            this.instanceIp = instanceIp;
            return this;
        }

        /**
         * Sets the value of {@link ManagedInstancesProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the managed instance.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link ManagedInstancesProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the managed instance.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link ManagedInstancesProps#getOsType}
         * @param osType Property osType: The operating system type of the managed instance.
         *               Valid values:
         *               windows
         *               linux
         * @return {@code this}
         */
        public Builder osType(java.lang.String osType) {
            this.osType = osType;
            return this;
        }

        /**
         * Sets the value of {@link ManagedInstancesProps#getOsType}
         * @param osType Property osType: The operating system type of the managed instance.
         *               Valid values:
         *               windows
         *               linux
         * @return {@code this}
         */
        public Builder osType(com.aliyun.ros.cdk.core.IResolvable osType) {
            this.osType = osType;
            return this;
        }

        /**
         * Sets the value of {@link ManagedInstancesProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link ManagedInstancesProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link ManagedInstancesProps#getTags}
         * @param tags Property tags: Tags of managedinstance.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.datasource.RosManagedInstances.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.datasource.RosManagedInstances.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ManagedInstancesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ManagedInstancesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ManagedInstancesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ManagedInstancesProps {
        private final java.lang.Object activationId;
        private final java.lang.Object instanceId;
        private final java.lang.Object instanceIp;
        private final java.lang.Object instanceName;
        private final java.lang.Object osType;
        private final java.lang.Object refreshOptions;
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
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.refreshOptions = builder.refreshOptions;
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
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
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
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.ManagedInstancesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ManagedInstancesProps.Jsii$Proxy that = (ManagedInstancesProps.Jsii$Proxy) o;

            if (this.activationId != null ? !this.activationId.equals(that.activationId) : that.activationId != null) return false;
            if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
            if (this.instanceIp != null ? !this.instanceIp.equals(that.instanceIp) : that.instanceIp != null) return false;
            if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
            if (this.osType != null ? !this.osType.equals(that.osType) : that.osType != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.activationId != null ? this.activationId.hashCode() : 0;
            result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
            result = 31 * result + (this.instanceIp != null ? this.instanceIp.hashCode() : 0);
            result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
            result = 31 * result + (this.osType != null ? this.osType.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
