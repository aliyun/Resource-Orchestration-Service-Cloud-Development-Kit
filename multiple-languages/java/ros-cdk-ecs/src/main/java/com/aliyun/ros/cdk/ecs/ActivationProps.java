package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>Activation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-activation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:51.198Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.ActivationProps")
@software.amazon.jsii.Jsii.Proxy(ActivationProps.Jsii$Proxy.class)
public interface ActivationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property description: The description of the activation code.
     * <p>
     * It must be 1 to 100 characters in length.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property instanceCount: The maximum number of times that you can use the activation code to register managed instances.
     * <p>
     * Valid values: 1 to 1000.Default value: 10.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceCount() {
        return null;
    }

    /**
     * Property instanceName: The default instance name prefix.
     * <p>
     * The instance name prefix must be 2 to 50 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:). If you use the activation code that is created by calling this operation (CreateActivation) to register managed instances, the instances are assigned sequential names that are prefixed by the value of this parameter. You can also specify a new instance name to replace the assigned sequential name when you register a managed instance.If you specify InstanceName when you register a managed instance, an instance name in theformat of <InstanceName>-<Number> is generated. The number of digits in the <Number> value isdetermined by that in the InstanceCount value. Example: 001. If you do not specify InstanceName, the hostname (Hostname) is used as the instance name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return null;
    }

    /**
     * Property ipAddressRange: The IP addresses of hosts that are allowed to use the activation code.
     * <p>
     * The value can be IPv4 addresses, IPv6 addresses, or CIDR blocks.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpAddressRange() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosActivation.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property timeToLiveInHours: The validity period of the activation code.
     * <p>
     * The activation code can no longer be used to register instances after the period ends. Unit: hours. Valid values: 1 to 876576, which represents a range of time from 1 hour to 100 years.Default value: 4.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeToLiveInHours() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ActivationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ActivationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ActivationProps> {
        java.lang.Object description;
        java.lang.Object instanceCount;
        java.lang.Object instanceName;
        java.lang.Object ipAddressRange;
        java.util.List<com.aliyun.ros.cdk.ecs.RosActivation.TagsProperty> tags;
        java.lang.Object timeToLiveInHours;

        /**
         * Sets the value of {@link ActivationProps#getDescription}
         * @param description Property description: The description of the activation code.
         *                    It must be 1 to 100 characters in length.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ActivationProps#getDescription}
         * @param description Property description: The description of the activation code.
         *                    It must be 1 to 100 characters in length.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ActivationProps#getInstanceCount}
         * @param instanceCount Property instanceCount: The maximum number of times that you can use the activation code to register managed instances.
         *                      Valid values: 1 to 1000.Default value: 10.
         * @return {@code this}
         */
        public Builder instanceCount(java.lang.Number instanceCount) {
            this.instanceCount = instanceCount;
            return this;
        }

        /**
         * Sets the value of {@link ActivationProps#getInstanceCount}
         * @param instanceCount Property instanceCount: The maximum number of times that you can use the activation code to register managed instances.
         *                      Valid values: 1 to 1000.Default value: 10.
         * @return {@code this}
         */
        public Builder instanceCount(com.aliyun.ros.cdk.core.IResolvable instanceCount) {
            this.instanceCount = instanceCount;
            return this;
        }

        /**
         * Sets the value of {@link ActivationProps#getInstanceName}
         * @param instanceName Property instanceName: The default instance name prefix.
         *                     The instance name prefix must be 2 to 50 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:). If you use the activation code that is created by calling this operation (CreateActivation) to register managed instances, the instances are assigned sequential names that are prefixed by the value of this parameter. You can also specify a new instance name to replace the assigned sequential name when you register a managed instance.If you specify InstanceName when you register a managed instance, an instance name in theformat of <InstanceName>-<Number> is generated. The number of digits in the <Number> value isdetermined by that in the InstanceCount value. Example: 001. If you do not specify InstanceName, the hostname (Hostname) is used as the instance name.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link ActivationProps#getInstanceName}
         * @param instanceName Property instanceName: The default instance name prefix.
         *                     The instance name prefix must be 2 to 50 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:). If you use the activation code that is created by calling this operation (CreateActivation) to register managed instances, the instances are assigned sequential names that are prefixed by the value of this parameter. You can also specify a new instance name to replace the assigned sequential name when you register a managed instance.If you specify InstanceName when you register a managed instance, an instance name in theformat of <InstanceName>-<Number> is generated. The number of digits in the <Number> value isdetermined by that in the InstanceCount value. Example: 001. If you do not specify InstanceName, the hostname (Hostname) is used as the instance name.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link ActivationProps#getIpAddressRange}
         * @param ipAddressRange Property ipAddressRange: The IP addresses of hosts that are allowed to use the activation code.
         *                       The value can be IPv4 addresses, IPv6 addresses, or CIDR blocks.
         * @return {@code this}
         */
        public Builder ipAddressRange(java.lang.String ipAddressRange) {
            this.ipAddressRange = ipAddressRange;
            return this;
        }

        /**
         * Sets the value of {@link ActivationProps#getIpAddressRange}
         * @param ipAddressRange Property ipAddressRange: The IP addresses of hosts that are allowed to use the activation code.
         *                       The value can be IPv4 addresses, IPv6 addresses, or CIDR blocks.
         * @return {@code this}
         */
        public Builder ipAddressRange(com.aliyun.ros.cdk.core.IResolvable ipAddressRange) {
            this.ipAddressRange = ipAddressRange;
            return this;
        }

        /**
         * Sets the value of {@link ActivationProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosActivation.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosActivation.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link ActivationProps#getTimeToLiveInHours}
         * @param timeToLiveInHours Property timeToLiveInHours: The validity period of the activation code.
         *                          The activation code can no longer be used to register instances after the period ends. Unit: hours. Valid values: 1 to 876576, which represents a range of time from 1 hour to 100 years.Default value: 4.
         * @return {@code this}
         */
        public Builder timeToLiveInHours(java.lang.Number timeToLiveInHours) {
            this.timeToLiveInHours = timeToLiveInHours;
            return this;
        }

        /**
         * Sets the value of {@link ActivationProps#getTimeToLiveInHours}
         * @param timeToLiveInHours Property timeToLiveInHours: The validity period of the activation code.
         *                          The activation code can no longer be used to register instances after the period ends. Unit: hours. Valid values: 1 to 876576, which represents a range of time from 1 hour to 100 years.Default value: 4.
         * @return {@code this}
         */
        public Builder timeToLiveInHours(com.aliyun.ros.cdk.core.IResolvable timeToLiveInHours) {
            this.timeToLiveInHours = timeToLiveInHours;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ActivationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ActivationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ActivationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ActivationProps {
        private final java.lang.Object description;
        private final java.lang.Object instanceCount;
        private final java.lang.Object instanceName;
        private final java.lang.Object ipAddressRange;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosActivation.TagsProperty> tags;
        private final java.lang.Object timeToLiveInHours;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceCount = software.amazon.jsii.Kernel.get(this, "instanceCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipAddressRange = software.amazon.jsii.Kernel.get(this, "ipAddressRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosActivation.TagsProperty.class)));
            this.timeToLiveInHours = software.amazon.jsii.Kernel.get(this, "timeToLiveInHours", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.description = builder.description;
            this.instanceCount = builder.instanceCount;
            this.instanceName = builder.instanceName;
            this.ipAddressRange = builder.ipAddressRange;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosActivation.TagsProperty>)builder.tags;
            this.timeToLiveInHours = builder.timeToLiveInHours;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getInstanceCount() {
            return this.instanceCount;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getIpAddressRange() {
            return this.ipAddressRange;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosActivation.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTimeToLiveInHours() {
            return this.timeToLiveInHours;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getInstanceCount() != null) {
                data.set("instanceCount", om.valueToTree(this.getInstanceCount()));
            }
            if (this.getInstanceName() != null) {
                data.set("instanceName", om.valueToTree(this.getInstanceName()));
            }
            if (this.getIpAddressRange() != null) {
                data.set("ipAddressRange", om.valueToTree(this.getIpAddressRange()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTimeToLiveInHours() != null) {
                data.set("timeToLiveInHours", om.valueToTree(this.getTimeToLiveInHours()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.ActivationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ActivationProps.Jsii$Proxy that = (ActivationProps.Jsii$Proxy) o;

            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.instanceCount != null ? !this.instanceCount.equals(that.instanceCount) : that.instanceCount != null) return false;
            if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
            if (this.ipAddressRange != null ? !this.ipAddressRange.equals(that.ipAddressRange) : that.ipAddressRange != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.timeToLiveInHours != null ? this.timeToLiveInHours.equals(that.timeToLiveInHours) : that.timeToLiveInHours == null;
        }

        @Override
        public final int hashCode() {
            int result = this.description != null ? this.description.hashCode() : 0;
            result = 31 * result + (this.instanceCount != null ? this.instanceCount.hashCode() : 0);
            result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
            result = 31 * result + (this.ipAddressRange != null ? this.ipAddressRange.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.timeToLiveInHours != null ? this.timeToLiveInHours.hashCode() : 0);
            return result;
        }
    }
}
