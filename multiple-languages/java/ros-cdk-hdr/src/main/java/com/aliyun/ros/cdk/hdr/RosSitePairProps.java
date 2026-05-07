package com.aliyun.ros.cdk.hdr;

/**
 * Properties for defining a <code>RosSitePair</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hdr-sitepair
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:51.276Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hdr.$Module.class, fqn = "@alicloud/ros-cdk-hdr.RosSitePairProps")
@software.amazon.jsii.Jsii.Proxy(RosSitePairProps.Jsii$Proxy.class)
public interface RosSitePairProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPrimarySiteName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPrimarySiteRegionId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPrimarySiteType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPrimarySiteVpcId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecondarySiteName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecondarySiteRegionId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecondarySiteType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecondarySiteVpcId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrimarySiteZoneId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecondarySiteZoneId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSitePairType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSitePairProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSitePairProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSitePairProps> {
        java.lang.Object primarySiteName;
        java.lang.Object primarySiteRegionId;
        java.lang.Object primarySiteType;
        java.lang.Object primarySiteVpcId;
        java.lang.Object secondarySiteName;
        java.lang.Object secondarySiteRegionId;
        java.lang.Object secondarySiteType;
        java.lang.Object secondarySiteVpcId;
        java.lang.Object primarySiteZoneId;
        java.lang.Object secondarySiteZoneId;
        java.lang.Object sitePairType;

        /**
         * Sets the value of {@link RosSitePairProps#getPrimarySiteName}
         * @param primarySiteName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder primarySiteName(java.lang.String primarySiteName) {
            this.primarySiteName = primarySiteName;
            return this;
        }

        /**
         * Sets the value of {@link RosSitePairProps#getPrimarySiteName}
         * @param primarySiteName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder primarySiteName(com.aliyun.ros.cdk.core.IResolvable primarySiteName) {
            this.primarySiteName = primarySiteName;
            return this;
        }

        /**
         * Sets the value of {@link RosSitePairProps#getPrimarySiteRegionId}
         * @param primarySiteRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder primarySiteRegionId(java.lang.String primarySiteRegionId) {
            this.primarySiteRegionId = primarySiteRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosSitePairProps#getPrimarySiteRegionId}
         * @param primarySiteRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder primarySiteRegionId(com.aliyun.ros.cdk.core.IResolvable primarySiteRegionId) {
            this.primarySiteRegionId = primarySiteRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosSitePairProps#getPrimarySiteType}
         * @param primarySiteType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder primarySiteType(java.lang.String primarySiteType) {
            this.primarySiteType = primarySiteType;
            return this;
        }

        /**
         * Sets the value of {@link RosSitePairProps#getPrimarySiteType}
         * @param primarySiteType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder primarySiteType(com.aliyun.ros.cdk.core.IResolvable primarySiteType) {
            this.primarySiteType = primarySiteType;
            return this;
        }

        /**
         * Sets the value of {@link RosSitePairProps#getPrimarySiteVpcId}
         * @param primarySiteVpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder primarySiteVpcId(java.lang.String primarySiteVpcId) {
            this.primarySiteVpcId = primarySiteVpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosSitePairProps#getPrimarySiteVpcId}
         * @param primarySiteVpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder primarySiteVpcId(com.aliyun.ros.cdk.core.IResolvable primarySiteVpcId) {
            this.primarySiteVpcId = primarySiteVpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosSitePairProps#getSecondarySiteName}
         * @param secondarySiteName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder secondarySiteName(java.lang.String secondarySiteName) {
            this.secondarySiteName = secondarySiteName;
            return this;
        }

        /**
         * Sets the value of {@link RosSitePairProps#getSecondarySiteName}
         * @param secondarySiteName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder secondarySiteName(com.aliyun.ros.cdk.core.IResolvable secondarySiteName) {
            this.secondarySiteName = secondarySiteName;
            return this;
        }

        /**
         * Sets the value of {@link RosSitePairProps#getSecondarySiteRegionId}
         * @param secondarySiteRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder secondarySiteRegionId(java.lang.String secondarySiteRegionId) {
            this.secondarySiteRegionId = secondarySiteRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosSitePairProps#getSecondarySiteRegionId}
         * @param secondarySiteRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder secondarySiteRegionId(com.aliyun.ros.cdk.core.IResolvable secondarySiteRegionId) {
            this.secondarySiteRegionId = secondarySiteRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosSitePairProps#getSecondarySiteType}
         * @param secondarySiteType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder secondarySiteType(java.lang.String secondarySiteType) {
            this.secondarySiteType = secondarySiteType;
            return this;
        }

        /**
         * Sets the value of {@link RosSitePairProps#getSecondarySiteType}
         * @param secondarySiteType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder secondarySiteType(com.aliyun.ros.cdk.core.IResolvable secondarySiteType) {
            this.secondarySiteType = secondarySiteType;
            return this;
        }

        /**
         * Sets the value of {@link RosSitePairProps#getSecondarySiteVpcId}
         * @param secondarySiteVpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder secondarySiteVpcId(java.lang.String secondarySiteVpcId) {
            this.secondarySiteVpcId = secondarySiteVpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosSitePairProps#getSecondarySiteVpcId}
         * @param secondarySiteVpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder secondarySiteVpcId(com.aliyun.ros.cdk.core.IResolvable secondarySiteVpcId) {
            this.secondarySiteVpcId = secondarySiteVpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosSitePairProps#getPrimarySiteZoneId}
         * @param primarySiteZoneId the value to be set.
         * @return {@code this}
         */
        public Builder primarySiteZoneId(java.lang.String primarySiteZoneId) {
            this.primarySiteZoneId = primarySiteZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosSitePairProps#getPrimarySiteZoneId}
         * @param primarySiteZoneId the value to be set.
         * @return {@code this}
         */
        public Builder primarySiteZoneId(com.aliyun.ros.cdk.core.IResolvable primarySiteZoneId) {
            this.primarySiteZoneId = primarySiteZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosSitePairProps#getSecondarySiteZoneId}
         * @param secondarySiteZoneId the value to be set.
         * @return {@code this}
         */
        public Builder secondarySiteZoneId(java.lang.String secondarySiteZoneId) {
            this.secondarySiteZoneId = secondarySiteZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosSitePairProps#getSecondarySiteZoneId}
         * @param secondarySiteZoneId the value to be set.
         * @return {@code this}
         */
        public Builder secondarySiteZoneId(com.aliyun.ros.cdk.core.IResolvable secondarySiteZoneId) {
            this.secondarySiteZoneId = secondarySiteZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosSitePairProps#getSitePairType}
         * @param sitePairType the value to be set.
         * @return {@code this}
         */
        public Builder sitePairType(java.lang.String sitePairType) {
            this.sitePairType = sitePairType;
            return this;
        }

        /**
         * Sets the value of {@link RosSitePairProps#getSitePairType}
         * @param sitePairType the value to be set.
         * @return {@code this}
         */
        public Builder sitePairType(com.aliyun.ros.cdk.core.IResolvable sitePairType) {
            this.sitePairType = sitePairType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSitePairProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSitePairProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSitePairProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSitePairProps {
        private final java.lang.Object primarySiteName;
        private final java.lang.Object primarySiteRegionId;
        private final java.lang.Object primarySiteType;
        private final java.lang.Object primarySiteVpcId;
        private final java.lang.Object secondarySiteName;
        private final java.lang.Object secondarySiteRegionId;
        private final java.lang.Object secondarySiteType;
        private final java.lang.Object secondarySiteVpcId;
        private final java.lang.Object primarySiteZoneId;
        private final java.lang.Object secondarySiteZoneId;
        private final java.lang.Object sitePairType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.primarySiteName = software.amazon.jsii.Kernel.get(this, "primarySiteName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.primarySiteRegionId = software.amazon.jsii.Kernel.get(this, "primarySiteRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.primarySiteType = software.amazon.jsii.Kernel.get(this, "primarySiteType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.primarySiteVpcId = software.amazon.jsii.Kernel.get(this, "primarySiteVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secondarySiteName = software.amazon.jsii.Kernel.get(this, "secondarySiteName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secondarySiteRegionId = software.amazon.jsii.Kernel.get(this, "secondarySiteRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secondarySiteType = software.amazon.jsii.Kernel.get(this, "secondarySiteType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secondarySiteVpcId = software.amazon.jsii.Kernel.get(this, "secondarySiteVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.primarySiteZoneId = software.amazon.jsii.Kernel.get(this, "primarySiteZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secondarySiteZoneId = software.amazon.jsii.Kernel.get(this, "secondarySiteZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sitePairType = software.amazon.jsii.Kernel.get(this, "sitePairType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.primarySiteName = java.util.Objects.requireNonNull(builder.primarySiteName, "primarySiteName is required");
            this.primarySiteRegionId = java.util.Objects.requireNonNull(builder.primarySiteRegionId, "primarySiteRegionId is required");
            this.primarySiteType = java.util.Objects.requireNonNull(builder.primarySiteType, "primarySiteType is required");
            this.primarySiteVpcId = java.util.Objects.requireNonNull(builder.primarySiteVpcId, "primarySiteVpcId is required");
            this.secondarySiteName = java.util.Objects.requireNonNull(builder.secondarySiteName, "secondarySiteName is required");
            this.secondarySiteRegionId = java.util.Objects.requireNonNull(builder.secondarySiteRegionId, "secondarySiteRegionId is required");
            this.secondarySiteType = java.util.Objects.requireNonNull(builder.secondarySiteType, "secondarySiteType is required");
            this.secondarySiteVpcId = java.util.Objects.requireNonNull(builder.secondarySiteVpcId, "secondarySiteVpcId is required");
            this.primarySiteZoneId = builder.primarySiteZoneId;
            this.secondarySiteZoneId = builder.secondarySiteZoneId;
            this.sitePairType = builder.sitePairType;
        }

        @Override
        public final java.lang.Object getPrimarySiteName() {
            return this.primarySiteName;
        }

        @Override
        public final java.lang.Object getPrimarySiteRegionId() {
            return this.primarySiteRegionId;
        }

        @Override
        public final java.lang.Object getPrimarySiteType() {
            return this.primarySiteType;
        }

        @Override
        public final java.lang.Object getPrimarySiteVpcId() {
            return this.primarySiteVpcId;
        }

        @Override
        public final java.lang.Object getSecondarySiteName() {
            return this.secondarySiteName;
        }

        @Override
        public final java.lang.Object getSecondarySiteRegionId() {
            return this.secondarySiteRegionId;
        }

        @Override
        public final java.lang.Object getSecondarySiteType() {
            return this.secondarySiteType;
        }

        @Override
        public final java.lang.Object getSecondarySiteVpcId() {
            return this.secondarySiteVpcId;
        }

        @Override
        public final java.lang.Object getPrimarySiteZoneId() {
            return this.primarySiteZoneId;
        }

        @Override
        public final java.lang.Object getSecondarySiteZoneId() {
            return this.secondarySiteZoneId;
        }

        @Override
        public final java.lang.Object getSitePairType() {
            return this.sitePairType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("primarySiteName", om.valueToTree(this.getPrimarySiteName()));
            data.set("primarySiteRegionId", om.valueToTree(this.getPrimarySiteRegionId()));
            data.set("primarySiteType", om.valueToTree(this.getPrimarySiteType()));
            data.set("primarySiteVpcId", om.valueToTree(this.getPrimarySiteVpcId()));
            data.set("secondarySiteName", om.valueToTree(this.getSecondarySiteName()));
            data.set("secondarySiteRegionId", om.valueToTree(this.getSecondarySiteRegionId()));
            data.set("secondarySiteType", om.valueToTree(this.getSecondarySiteType()));
            data.set("secondarySiteVpcId", om.valueToTree(this.getSecondarySiteVpcId()));
            if (this.getPrimarySiteZoneId() != null) {
                data.set("primarySiteZoneId", om.valueToTree(this.getPrimarySiteZoneId()));
            }
            if (this.getSecondarySiteZoneId() != null) {
                data.set("secondarySiteZoneId", om.valueToTree(this.getSecondarySiteZoneId()));
            }
            if (this.getSitePairType() != null) {
                data.set("sitePairType", om.valueToTree(this.getSitePairType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hdr.RosSitePairProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSitePairProps.Jsii$Proxy that = (RosSitePairProps.Jsii$Proxy) o;

            if (!primarySiteName.equals(that.primarySiteName)) return false;
            if (!primarySiteRegionId.equals(that.primarySiteRegionId)) return false;
            if (!primarySiteType.equals(that.primarySiteType)) return false;
            if (!primarySiteVpcId.equals(that.primarySiteVpcId)) return false;
            if (!secondarySiteName.equals(that.secondarySiteName)) return false;
            if (!secondarySiteRegionId.equals(that.secondarySiteRegionId)) return false;
            if (!secondarySiteType.equals(that.secondarySiteType)) return false;
            if (!secondarySiteVpcId.equals(that.secondarySiteVpcId)) return false;
            if (this.primarySiteZoneId != null ? !this.primarySiteZoneId.equals(that.primarySiteZoneId) : that.primarySiteZoneId != null) return false;
            if (this.secondarySiteZoneId != null ? !this.secondarySiteZoneId.equals(that.secondarySiteZoneId) : that.secondarySiteZoneId != null) return false;
            return this.sitePairType != null ? this.sitePairType.equals(that.sitePairType) : that.sitePairType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.primarySiteName.hashCode();
            result = 31 * result + (this.primarySiteRegionId.hashCode());
            result = 31 * result + (this.primarySiteType.hashCode());
            result = 31 * result + (this.primarySiteVpcId.hashCode());
            result = 31 * result + (this.secondarySiteName.hashCode());
            result = 31 * result + (this.secondarySiteRegionId.hashCode());
            result = 31 * result + (this.secondarySiteType.hashCode());
            result = 31 * result + (this.secondarySiteVpcId.hashCode());
            result = 31 * result + (this.primarySiteZoneId != null ? this.primarySiteZoneId.hashCode() : 0);
            result = 31 * result + (this.secondarySiteZoneId != null ? this.secondarySiteZoneId.hashCode() : 0);
            result = 31 * result + (this.sitePairType != null ? this.sitePairType.hashCode() : 0);
            return result;
        }
    }
}
