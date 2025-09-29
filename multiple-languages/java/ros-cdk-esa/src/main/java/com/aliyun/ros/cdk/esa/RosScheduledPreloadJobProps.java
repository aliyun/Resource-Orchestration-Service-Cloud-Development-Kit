package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>RosScheduledPreloadJob</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-scheduledpreloadjob
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.593Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RosScheduledPreloadJobProps")
@software.amazon.jsii.Jsii.Proxy(RosScheduledPreloadJobProps.Jsii$Proxy.class)
public interface RosScheduledPreloadJobProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInsertWay();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScheduledPreloadJobName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOssUrl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUrlList() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosScheduledPreloadJobProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosScheduledPreloadJobProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosScheduledPreloadJobProps> {
        java.lang.Object insertWay;
        java.lang.Object scheduledPreloadJobName;
        java.lang.Object siteId;
        java.lang.Object ossUrl;
        java.lang.Object urlList;

        /**
         * Sets the value of {@link RosScheduledPreloadJobProps#getInsertWay}
         * @param insertWay the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder insertWay(java.lang.String insertWay) {
            this.insertWay = insertWay;
            return this;
        }

        /**
         * Sets the value of {@link RosScheduledPreloadJobProps#getInsertWay}
         * @param insertWay the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder insertWay(com.aliyun.ros.cdk.core.IResolvable insertWay) {
            this.insertWay = insertWay;
            return this;
        }

        /**
         * Sets the value of {@link RosScheduledPreloadJobProps#getScheduledPreloadJobName}
         * @param scheduledPreloadJobName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scheduledPreloadJobName(java.lang.String scheduledPreloadJobName) {
            this.scheduledPreloadJobName = scheduledPreloadJobName;
            return this;
        }

        /**
         * Sets the value of {@link RosScheduledPreloadJobProps#getScheduledPreloadJobName}
         * @param scheduledPreloadJobName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scheduledPreloadJobName(com.aliyun.ros.cdk.core.IResolvable scheduledPreloadJobName) {
            this.scheduledPreloadJobName = scheduledPreloadJobName;
            return this;
        }

        /**
         * Sets the value of {@link RosScheduledPreloadJobProps#getSiteId}
         * @param siteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link RosScheduledPreloadJobProps#getSiteId}
         * @param siteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link RosScheduledPreloadJobProps#getOssUrl}
         * @param ossUrl the value to be set.
         * @return {@code this}
         */
        public Builder ossUrl(java.lang.String ossUrl) {
            this.ossUrl = ossUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosScheduledPreloadJobProps#getOssUrl}
         * @param ossUrl the value to be set.
         * @return {@code this}
         */
        public Builder ossUrl(com.aliyun.ros.cdk.core.IResolvable ossUrl) {
            this.ossUrl = ossUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosScheduledPreloadJobProps#getUrlList}
         * @param urlList the value to be set.
         * @return {@code this}
         */
        public Builder urlList(com.aliyun.ros.cdk.core.IResolvable urlList) {
            this.urlList = urlList;
            return this;
        }

        /**
         * Sets the value of {@link RosScheduledPreloadJobProps#getUrlList}
         * @param urlList the value to be set.
         * @return {@code this}
         */
        public Builder urlList(java.util.List<? extends java.lang.Object> urlList) {
            this.urlList = urlList;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosScheduledPreloadJobProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosScheduledPreloadJobProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosScheduledPreloadJobProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosScheduledPreloadJobProps {
        private final java.lang.Object insertWay;
        private final java.lang.Object scheduledPreloadJobName;
        private final java.lang.Object siteId;
        private final java.lang.Object ossUrl;
        private final java.lang.Object urlList;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.insertWay = software.amazon.jsii.Kernel.get(this, "insertWay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scheduledPreloadJobName = software.amazon.jsii.Kernel.get(this, "scheduledPreloadJobName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ossUrl = software.amazon.jsii.Kernel.get(this, "ossUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.urlList = software.amazon.jsii.Kernel.get(this, "urlList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.insertWay = java.util.Objects.requireNonNull(builder.insertWay, "insertWay is required");
            this.scheduledPreloadJobName = java.util.Objects.requireNonNull(builder.scheduledPreloadJobName, "scheduledPreloadJobName is required");
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
            this.ossUrl = builder.ossUrl;
            this.urlList = builder.urlList;
        }

        @Override
        public final java.lang.Object getInsertWay() {
            return this.insertWay;
        }

        @Override
        public final java.lang.Object getScheduledPreloadJobName() {
            return this.scheduledPreloadJobName;
        }

        @Override
        public final java.lang.Object getSiteId() {
            return this.siteId;
        }

        @Override
        public final java.lang.Object getOssUrl() {
            return this.ossUrl;
        }

        @Override
        public final java.lang.Object getUrlList() {
            return this.urlList;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("insertWay", om.valueToTree(this.getInsertWay()));
            data.set("scheduledPreloadJobName", om.valueToTree(this.getScheduledPreloadJobName()));
            data.set("siteId", om.valueToTree(this.getSiteId()));
            if (this.getOssUrl() != null) {
                data.set("ossUrl", om.valueToTree(this.getOssUrl()));
            }
            if (this.getUrlList() != null) {
                data.set("urlList", om.valueToTree(this.getUrlList()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RosScheduledPreloadJobProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosScheduledPreloadJobProps.Jsii$Proxy that = (RosScheduledPreloadJobProps.Jsii$Proxy) o;

            if (!insertWay.equals(that.insertWay)) return false;
            if (!scheduledPreloadJobName.equals(that.scheduledPreloadJobName)) return false;
            if (!siteId.equals(that.siteId)) return false;
            if (this.ossUrl != null ? !this.ossUrl.equals(that.ossUrl) : that.ossUrl != null) return false;
            return this.urlList != null ? this.urlList.equals(that.urlList) : that.urlList == null;
        }

        @Override
        public final int hashCode() {
            int result = this.insertWay.hashCode();
            result = 31 * result + (this.scheduledPreloadJobName.hashCode());
            result = 31 * result + (this.siteId.hashCode());
            result = 31 * result + (this.ossUrl != null ? this.ossUrl.hashCode() : 0);
            result = 31 * result + (this.urlList != null ? this.urlList.hashCode() : 0);
            return result;
        }
    }
}
