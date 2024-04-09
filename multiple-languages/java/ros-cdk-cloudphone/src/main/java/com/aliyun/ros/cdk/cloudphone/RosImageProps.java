package com.aliyun.ros.cdk.cloudphone;

/**
 * Properties for defining a <code>RosImage</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-image
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:30.965Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudphone.$Module.class, fqn = "@alicloud/ros-cdk-cloudphone.RosImageProps")
@software.amazon.jsii.Jsii.Proxy(RosImageProps.Jsii$Proxy.class)
public interface RosImageProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosImageProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosImageProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosImageProps> {
        java.lang.Object instanceId;
        java.lang.Object description;
        java.lang.Object imageName;

        /**
         * Sets the value of {@link RosImageProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosImageProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosImageProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosImageProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosImageProps#getImageName}
         * @param imageName the value to be set.
         * @return {@code this}
         */
        public Builder imageName(java.lang.String imageName) {
            this.imageName = imageName;
            return this;
        }

        /**
         * Sets the value of {@link RosImageProps#getImageName}
         * @param imageName the value to be set.
         * @return {@code this}
         */
        public Builder imageName(com.aliyun.ros.cdk.core.IResolvable imageName) {
            this.imageName = imageName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosImageProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosImageProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosImageProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosImageProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object description;
        private final java.lang.Object imageName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageName = software.amazon.jsii.Kernel.get(this, "imageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.description = builder.description;
            this.imageName = builder.imageName;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getImageName() {
            return this.imageName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getImageName() != null) {
                data.set("imageName", om.valueToTree(this.getImageName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudphone.RosImageProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosImageProps.Jsii$Proxy that = (RosImageProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.imageName != null ? this.imageName.equals(that.imageName) : that.imageName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.imageName != null ? this.imageName.hashCode() : 0);
            return result;
        }
    }
}
