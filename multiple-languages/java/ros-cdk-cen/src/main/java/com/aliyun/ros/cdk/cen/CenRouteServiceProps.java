package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a <code>CenRouteService</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenrouteservice
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:07.712Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.CenRouteServiceProps")
@software.amazon.jsii.Jsii.Proxy(CenRouteServiceProps.Jsii$Proxy.class)
public interface CenRouteServiceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property accessRegionId: The region where the cloud service is deployed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccessRegionId();

    /**
     * Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenId();

    /**
     * Property host: The domain or IP address of the cloud service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHost();

    /**
     * Property hostRegionId: The region where the cloud service is deployed.
     * <p>
     * You can call the DescribeRegions operation to query region IDs.
     * Note The HostRegionId and AccessRegionIds.N must be set to the same value.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHostRegionId();

    /**
     * Property hostVpcId: The virtual private cloud (VPC) that is associated with the cloud service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHostVpcId();

    /**
     * Property conflictIgnore: Whether to ignore conflict when creating.
     * <p>
     * If true, when the CloudRoute.Conflict error code is encountered during creation, it will be ignored as the creation is successful, and the deletion phase will be skipped.
     * Default false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConflictIgnore() {
        return null;
    }

    /**
     * Property description: The description of the cloud service.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CenRouteServiceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CenRouteServiceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CenRouteServiceProps> {
        java.lang.Object accessRegionId;
        java.lang.Object cenId;
        java.lang.Object host;
        java.lang.Object hostRegionId;
        java.lang.Object hostVpcId;
        java.lang.Object conflictIgnore;
        java.lang.Object description;

        /**
         * Sets the value of {@link CenRouteServiceProps#getAccessRegionId}
         * @param accessRegionId Property accessRegionId: The region where the cloud service is deployed. This parameter is required.
         * @return {@code this}
         */
        public Builder accessRegionId(java.lang.String accessRegionId) {
            this.accessRegionId = accessRegionId;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteServiceProps#getAccessRegionId}
         * @param accessRegionId Property accessRegionId: The region where the cloud service is deployed. This parameter is required.
         * @return {@code this}
         */
        public Builder accessRegionId(com.aliyun.ros.cdk.core.IResolvable accessRegionId) {
            this.accessRegionId = accessRegionId;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteServiceProps#getCenId}
         * @param cenId Property cenId: The ID of the Cloud Enterprise Network (CEN) instance. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteServiceProps#getCenId}
         * @param cenId Property cenId: The ID of the Cloud Enterprise Network (CEN) instance. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteServiceProps#getHost}
         * @param host Property host: The domain or IP address of the cloud service. This parameter is required.
         * @return {@code this}
         */
        public Builder host(java.lang.String host) {
            this.host = host;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteServiceProps#getHost}
         * @param host Property host: The domain or IP address of the cloud service. This parameter is required.
         * @return {@code this}
         */
        public Builder host(com.aliyun.ros.cdk.core.IResolvable host) {
            this.host = host;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteServiceProps#getHostRegionId}
         * @param hostRegionId Property hostRegionId: The region where the cloud service is deployed. This parameter is required.
         *                     You can call the DescribeRegions operation to query region IDs.
         *                     Note The HostRegionId and AccessRegionIds.N must be set to the same value.
         * @return {@code this}
         */
        public Builder hostRegionId(java.lang.String hostRegionId) {
            this.hostRegionId = hostRegionId;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteServiceProps#getHostRegionId}
         * @param hostRegionId Property hostRegionId: The region where the cloud service is deployed. This parameter is required.
         *                     You can call the DescribeRegions operation to query region IDs.
         *                     Note The HostRegionId and AccessRegionIds.N must be set to the same value.
         * @return {@code this}
         */
        public Builder hostRegionId(com.aliyun.ros.cdk.core.IResolvable hostRegionId) {
            this.hostRegionId = hostRegionId;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteServiceProps#getHostVpcId}
         * @param hostVpcId Property hostVpcId: The virtual private cloud (VPC) that is associated with the cloud service. This parameter is required.
         * @return {@code this}
         */
        public Builder hostVpcId(java.lang.String hostVpcId) {
            this.hostVpcId = hostVpcId;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteServiceProps#getHostVpcId}
         * @param hostVpcId Property hostVpcId: The virtual private cloud (VPC) that is associated with the cloud service. This parameter is required.
         * @return {@code this}
         */
        public Builder hostVpcId(com.aliyun.ros.cdk.core.IResolvable hostVpcId) {
            this.hostVpcId = hostVpcId;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteServiceProps#getConflictIgnore}
         * @param conflictIgnore Property conflictIgnore: Whether to ignore conflict when creating.
         *                       If true, when the CloudRoute.Conflict error code is encountered during creation, it will be ignored as the creation is successful, and the deletion phase will be skipped.
         *                       Default false.
         * @return {@code this}
         */
        public Builder conflictIgnore(java.lang.Boolean conflictIgnore) {
            this.conflictIgnore = conflictIgnore;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteServiceProps#getConflictIgnore}
         * @param conflictIgnore Property conflictIgnore: Whether to ignore conflict when creating.
         *                       If true, when the CloudRoute.Conflict error code is encountered during creation, it will be ignored as the creation is successful, and the deletion phase will be skipped.
         *                       Default false.
         * @return {@code this}
         */
        public Builder conflictIgnore(com.aliyun.ros.cdk.core.IResolvable conflictIgnore) {
            this.conflictIgnore = conflictIgnore;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteServiceProps#getDescription}
         * @param description Property description: The description of the cloud service.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link CenRouteServiceProps#getDescription}
         * @param description Property description: The description of the cloud service.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CenRouteServiceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CenRouteServiceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CenRouteServiceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CenRouteServiceProps {
        private final java.lang.Object accessRegionId;
        private final java.lang.Object cenId;
        private final java.lang.Object host;
        private final java.lang.Object hostRegionId;
        private final java.lang.Object hostVpcId;
        private final java.lang.Object conflictIgnore;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accessRegionId = software.amazon.jsii.Kernel.get(this, "accessRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.host = software.amazon.jsii.Kernel.get(this, "host", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostRegionId = software.amazon.jsii.Kernel.get(this, "hostRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostVpcId = software.amazon.jsii.Kernel.get(this, "hostVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.conflictIgnore = software.amazon.jsii.Kernel.get(this, "conflictIgnore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accessRegionId = java.util.Objects.requireNonNull(builder.accessRegionId, "accessRegionId is required");
            this.cenId = java.util.Objects.requireNonNull(builder.cenId, "cenId is required");
            this.host = java.util.Objects.requireNonNull(builder.host, "host is required");
            this.hostRegionId = java.util.Objects.requireNonNull(builder.hostRegionId, "hostRegionId is required");
            this.hostVpcId = java.util.Objects.requireNonNull(builder.hostVpcId, "hostVpcId is required");
            this.conflictIgnore = builder.conflictIgnore;
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getAccessRegionId() {
            return this.accessRegionId;
        }

        @Override
        public final java.lang.Object getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.Object getHost() {
            return this.host;
        }

        @Override
        public final java.lang.Object getHostRegionId() {
            return this.hostRegionId;
        }

        @Override
        public final java.lang.Object getHostVpcId() {
            return this.hostVpcId;
        }

        @Override
        public final java.lang.Object getConflictIgnore() {
            return this.conflictIgnore;
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

            data.set("accessRegionId", om.valueToTree(this.getAccessRegionId()));
            data.set("cenId", om.valueToTree(this.getCenId()));
            data.set("host", om.valueToTree(this.getHost()));
            data.set("hostRegionId", om.valueToTree(this.getHostRegionId()));
            data.set("hostVpcId", om.valueToTree(this.getHostVpcId()));
            if (this.getConflictIgnore() != null) {
                data.set("conflictIgnore", om.valueToTree(this.getConflictIgnore()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.CenRouteServiceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CenRouteServiceProps.Jsii$Proxy that = (CenRouteServiceProps.Jsii$Proxy) o;

            if (!accessRegionId.equals(that.accessRegionId)) return false;
            if (!cenId.equals(that.cenId)) return false;
            if (!host.equals(that.host)) return false;
            if (!hostRegionId.equals(that.hostRegionId)) return false;
            if (!hostVpcId.equals(that.hostVpcId)) return false;
            if (this.conflictIgnore != null ? !this.conflictIgnore.equals(that.conflictIgnore) : that.conflictIgnore != null) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accessRegionId.hashCode();
            result = 31 * result + (this.cenId.hashCode());
            result = 31 * result + (this.host.hashCode());
            result = 31 * result + (this.hostRegionId.hashCode());
            result = 31 * result + (this.hostVpcId.hashCode());
            result = 31 * result + (this.conflictIgnore != null ? this.conflictIgnore.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
