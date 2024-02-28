package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>RosCommonBandwidthPackages</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackages
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:31.334Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RosCommonBandwidthPackagesProps")
@software.amazon.jsii.Jsii.Proxy(RosCommonBandwidthPackagesProps.Jsii$Proxy.class)
public interface RosCommonBandwidthPackagesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommonBandwidthPackageId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommonBandwidthPackageName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosCommonBandwidthPackagesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCommonBandwidthPackagesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCommonBandwidthPackagesProps> {
        java.lang.Object commonBandwidthPackageId;
        java.lang.Object commonBandwidthPackageName;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link RosCommonBandwidthPackagesProps#getCommonBandwidthPackageId}
         * @param commonBandwidthPackageId the value to be set.
         * @return {@code this}
         */
        public Builder commonBandwidthPackageId(java.lang.String commonBandwidthPackageId) {
            this.commonBandwidthPackageId = commonBandwidthPackageId;
            return this;
        }

        /**
         * Sets the value of {@link RosCommonBandwidthPackagesProps#getCommonBandwidthPackageId}
         * @param commonBandwidthPackageId the value to be set.
         * @return {@code this}
         */
        public Builder commonBandwidthPackageId(com.aliyun.ros.cdk.core.IResolvable commonBandwidthPackageId) {
            this.commonBandwidthPackageId = commonBandwidthPackageId;
            return this;
        }

        /**
         * Sets the value of {@link RosCommonBandwidthPackagesProps#getCommonBandwidthPackageName}
         * @param commonBandwidthPackageName the value to be set.
         * @return {@code this}
         */
        public Builder commonBandwidthPackageName(java.lang.String commonBandwidthPackageName) {
            this.commonBandwidthPackageName = commonBandwidthPackageName;
            return this;
        }

        /**
         * Sets the value of {@link RosCommonBandwidthPackagesProps#getCommonBandwidthPackageName}
         * @param commonBandwidthPackageName the value to be set.
         * @return {@code this}
         */
        public Builder commonBandwidthPackageName(com.aliyun.ros.cdk.core.IResolvable commonBandwidthPackageName) {
            this.commonBandwidthPackageName = commonBandwidthPackageName;
            return this;
        }

        /**
         * Sets the value of {@link RosCommonBandwidthPackagesProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosCommonBandwidthPackagesProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCommonBandwidthPackagesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCommonBandwidthPackagesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosCommonBandwidthPackagesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCommonBandwidthPackagesProps {
        private final java.lang.Object commonBandwidthPackageId;
        private final java.lang.Object commonBandwidthPackageName;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.commonBandwidthPackageId = software.amazon.jsii.Kernel.get(this, "commonBandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.commonBandwidthPackageName = software.amazon.jsii.Kernel.get(this, "commonBandwidthPackageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.commonBandwidthPackageId = builder.commonBandwidthPackageId;
            this.commonBandwidthPackageName = builder.commonBandwidthPackageName;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getCommonBandwidthPackageId() {
            return this.commonBandwidthPackageId;
        }

        @Override
        public final java.lang.Object getCommonBandwidthPackageName() {
            return this.commonBandwidthPackageName;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getCommonBandwidthPackageId() != null) {
                data.set("commonBandwidthPackageId", om.valueToTree(this.getCommonBandwidthPackageId()));
            }
            if (this.getCommonBandwidthPackageName() != null) {
                data.set("commonBandwidthPackageName", om.valueToTree(this.getCommonBandwidthPackageName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.RosCommonBandwidthPackagesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCommonBandwidthPackagesProps.Jsii$Proxy that = (RosCommonBandwidthPackagesProps.Jsii$Proxy) o;

            if (this.commonBandwidthPackageId != null ? !this.commonBandwidthPackageId.equals(that.commonBandwidthPackageId) : that.commonBandwidthPackageId != null) return false;
            if (this.commonBandwidthPackageName != null ? !this.commonBandwidthPackageName.equals(that.commonBandwidthPackageName) : that.commonBandwidthPackageName != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.commonBandwidthPackageId != null ? this.commonBandwidthPackageId.hashCode() : 0;
            result = 31 * result + (this.commonBandwidthPackageName != null ? this.commonBandwidthPackageName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
