package com.aliyun.ros.cdk.ens.datasource;

/**
 * Properties for defining a <code>RosInstances</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ens-instances
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:39.670Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ens.$Module.class, fqn = "@alicloud/ros-cdk-ens.datasource.RosInstancesProps")
@software.amazon.jsii.Jsii.Proxy(RosInstancesProps.Jsii$Proxy.class)
public interface RosInstancesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnsRegionIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnsServiceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceResourceType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosInstancesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosInstancesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosInstancesProps> {
        java.lang.Object ensRegionIds;
        java.lang.Object ensServiceId;
        java.lang.Object imageId;
        java.lang.Object instanceIds;
        java.lang.Object instanceName;
        java.lang.Object instanceResourceType;
        java.lang.Object refreshOptions;
        java.lang.Object status;

        /**
         * Sets the value of {@link RosInstancesProps#getEnsRegionIds}
         * @param ensRegionIds the value to be set.
         * @return {@code this}
         */
        public Builder ensRegionIds(java.util.List<? extends java.lang.Object> ensRegionIds) {
            this.ensRegionIds = ensRegionIds;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getEnsRegionIds}
         * @param ensRegionIds the value to be set.
         * @return {@code this}
         */
        public Builder ensRegionIds(com.aliyun.ros.cdk.core.IResolvable ensRegionIds) {
            this.ensRegionIds = ensRegionIds;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getEnsServiceId}
         * @param ensServiceId the value to be set.
         * @return {@code this}
         */
        public Builder ensServiceId(java.lang.String ensServiceId) {
            this.ensServiceId = ensServiceId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getEnsServiceId}
         * @param ensServiceId the value to be set.
         * @return {@code this}
         */
        public Builder ensServiceId(com.aliyun.ros.cdk.core.IResolvable ensServiceId) {
            this.ensServiceId = ensServiceId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getImageId}
         * @param imageId the value to be set.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getImageId}
         * @param imageId the value to be set.
         * @return {@code this}
         */
        public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getInstanceIds}
         * @param instanceIds the value to be set.
         * @return {@code this}
         */
        public Builder instanceIds(java.util.List<? extends java.lang.Object> instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getInstanceIds}
         * @param instanceIds the value to be set.
         * @return {@code this}
         */
        public Builder instanceIds(com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getInstanceName}
         * @param instanceName the value to be set.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getInstanceName}
         * @param instanceName the value to be set.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getInstanceResourceType}
         * @param instanceResourceType the value to be set.
         * @return {@code this}
         */
        public Builder instanceResourceType(java.lang.String instanceResourceType) {
            this.instanceResourceType = instanceResourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getInstanceResourceType}
         * @param instanceResourceType the value to be set.
         * @return {@code this}
         */
        public Builder instanceResourceType(com.aliyun.ros.cdk.core.IResolvable instanceResourceType) {
            this.instanceResourceType = instanceResourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getStatus}
         * @param status the value to be set.
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getStatus}
         * @param status the value to be set.
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosInstancesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosInstancesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosInstancesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosInstancesProps {
        private final java.lang.Object ensRegionIds;
        private final java.lang.Object ensServiceId;
        private final java.lang.Object imageId;
        private final java.lang.Object instanceIds;
        private final java.lang.Object instanceName;
        private final java.lang.Object instanceResourceType;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object status;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ensRegionIds = software.amazon.jsii.Kernel.get(this, "ensRegionIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ensServiceId = software.amazon.jsii.Kernel.get(this, "ensServiceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceResourceType = software.amazon.jsii.Kernel.get(this, "instanceResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ensRegionIds = builder.ensRegionIds;
            this.ensServiceId = builder.ensServiceId;
            this.imageId = builder.imageId;
            this.instanceIds = builder.instanceIds;
            this.instanceName = builder.instanceName;
            this.instanceResourceType = builder.instanceResourceType;
            this.refreshOptions = builder.refreshOptions;
            this.status = builder.status;
        }

        @Override
        public final java.lang.Object getEnsRegionIds() {
            return this.ensRegionIds;
        }

        @Override
        public final java.lang.Object getEnsServiceId() {
            return this.ensServiceId;
        }

        @Override
        public final java.lang.Object getImageId() {
            return this.imageId;
        }

        @Override
        public final java.lang.Object getInstanceIds() {
            return this.instanceIds;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getInstanceResourceType() {
            return this.instanceResourceType;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getStatus() {
            return this.status;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getEnsRegionIds() != null) {
                data.set("ensRegionIds", om.valueToTree(this.getEnsRegionIds()));
            }
            if (this.getEnsServiceId() != null) {
                data.set("ensServiceId", om.valueToTree(this.getEnsServiceId()));
            }
            if (this.getImageId() != null) {
                data.set("imageId", om.valueToTree(this.getImageId()));
            }
            if (this.getInstanceIds() != null) {
                data.set("instanceIds", om.valueToTree(this.getInstanceIds()));
            }
            if (this.getInstanceName() != null) {
                data.set("instanceName", om.valueToTree(this.getInstanceName()));
            }
            if (this.getInstanceResourceType() != null) {
                data.set("instanceResourceType", om.valueToTree(this.getInstanceResourceType()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getStatus() != null) {
                data.set("status", om.valueToTree(this.getStatus()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ens.datasource.RosInstancesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosInstancesProps.Jsii$Proxy that = (RosInstancesProps.Jsii$Proxy) o;

            if (this.ensRegionIds != null ? !this.ensRegionIds.equals(that.ensRegionIds) : that.ensRegionIds != null) return false;
            if (this.ensServiceId != null ? !this.ensServiceId.equals(that.ensServiceId) : that.ensServiceId != null) return false;
            if (this.imageId != null ? !this.imageId.equals(that.imageId) : that.imageId != null) return false;
            if (this.instanceIds != null ? !this.instanceIds.equals(that.instanceIds) : that.instanceIds != null) return false;
            if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
            if (this.instanceResourceType != null ? !this.instanceResourceType.equals(that.instanceResourceType) : that.instanceResourceType != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            return this.status != null ? this.status.equals(that.status) : that.status == null;
        }

        @Override
        public final int hashCode() {
            int result = this.ensRegionIds != null ? this.ensRegionIds.hashCode() : 0;
            result = 31 * result + (this.ensServiceId != null ? this.ensServiceId.hashCode() : 0);
            result = 31 * result + (this.imageId != null ? this.imageId.hashCode() : 0);
            result = 31 * result + (this.instanceIds != null ? this.instanceIds.hashCode() : 0);
            result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
            result = 31 * result + (this.instanceResourceType != null ? this.instanceResourceType.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
            return result;
        }
    }
}
