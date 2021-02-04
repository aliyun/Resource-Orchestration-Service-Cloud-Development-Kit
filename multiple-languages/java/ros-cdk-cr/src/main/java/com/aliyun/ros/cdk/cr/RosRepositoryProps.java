package com.aliyun.ros.cdk.cr;

/**
 * Properties for defining a `ALIYUN::CR::Repository`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.297Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.RosRepositoryProps")
@software.amazon.jsii.Jsii.Proxy(RosRepositoryProps.Jsii$Proxy.class)
public interface RosRepositoryProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRepoName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRepoNamespace();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRepoType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSummary();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDetail() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosRepositoryProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosRepositoryProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosRepositoryProps> {
        private java.lang.String repoName;
        private java.lang.String repoNamespace;
        private java.lang.String repoType;
        private java.lang.String summary;
        private java.lang.String detail;

        /**
         * Sets the value of {@link RosRepositoryProps#getRepoName}
         * @param repoName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder repoName(java.lang.String repoName) {
            this.repoName = repoName;
            return this;
        }

        /**
         * Sets the value of {@link RosRepositoryProps#getRepoNamespace}
         * @param repoNamespace the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder repoNamespace(java.lang.String repoNamespace) {
            this.repoNamespace = repoNamespace;
            return this;
        }

        /**
         * Sets the value of {@link RosRepositoryProps#getRepoType}
         * @param repoType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder repoType(java.lang.String repoType) {
            this.repoType = repoType;
            return this;
        }

        /**
         * Sets the value of {@link RosRepositoryProps#getSummary}
         * @param summary the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder summary(java.lang.String summary) {
            this.summary = summary;
            return this;
        }

        /**
         * Sets the value of {@link RosRepositoryProps#getDetail}
         * @param detail the value to be set.
         * @return {@code this}
         */
        public Builder detail(java.lang.String detail) {
            this.detail = detail;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosRepositoryProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosRepositoryProps build() {
            return new Jsii$Proxy(repoName, repoNamespace, repoType, summary, detail);
        }
    }

    /**
     * An implementation for {@link RosRepositoryProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosRepositoryProps {
        private final java.lang.String repoName;
        private final java.lang.String repoNamespace;
        private final java.lang.String repoType;
        private final java.lang.String summary;
        private final java.lang.String detail;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.repoName = software.amazon.jsii.Kernel.get(this, "repoName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.repoNamespace = software.amazon.jsii.Kernel.get(this, "repoNamespace", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.repoType = software.amazon.jsii.Kernel.get(this, "repoType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.summary = software.amazon.jsii.Kernel.get(this, "summary", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.detail = software.amazon.jsii.Kernel.get(this, "detail", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String repoName, final java.lang.String repoNamespace, final java.lang.String repoType, final java.lang.String summary, final java.lang.String detail) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.repoName = java.util.Objects.requireNonNull(repoName, "repoName is required");
            this.repoNamespace = java.util.Objects.requireNonNull(repoNamespace, "repoNamespace is required");
            this.repoType = java.util.Objects.requireNonNull(repoType, "repoType is required");
            this.summary = java.util.Objects.requireNonNull(summary, "summary is required");
            this.detail = detail;
        }

        @Override
        public final java.lang.String getRepoName() {
            return this.repoName;
        }

        @Override
        public final java.lang.String getRepoNamespace() {
            return this.repoNamespace;
        }

        @Override
        public final java.lang.String getRepoType() {
            return this.repoType;
        }

        @Override
        public final java.lang.String getSummary() {
            return this.summary;
        }

        @Override
        public final java.lang.String getDetail() {
            return this.detail;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("repoName", om.valueToTree(this.getRepoName()));
            data.set("repoNamespace", om.valueToTree(this.getRepoNamespace()));
            data.set("repoType", om.valueToTree(this.getRepoType()));
            data.set("summary", om.valueToTree(this.getSummary()));
            if (this.getDetail() != null) {
                data.set("detail", om.valueToTree(this.getDetail()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cr.RosRepositoryProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosRepositoryProps.Jsii$Proxy that = (RosRepositoryProps.Jsii$Proxy) o;

            if (!repoName.equals(that.repoName)) return false;
            if (!repoNamespace.equals(that.repoNamespace)) return false;
            if (!repoType.equals(that.repoType)) return false;
            if (!summary.equals(that.summary)) return false;
            return this.detail != null ? this.detail.equals(that.detail) : that.detail == null;
        }

        @Override
        public final int hashCode() {
            int result = this.repoName.hashCode();
            result = 31 * result + (this.repoNamespace.hashCode());
            result = 31 * result + (this.repoType.hashCode());
            result = 31 * result + (this.summary.hashCode());
            result = 31 * result + (this.detail != null ? this.detail.hashCode() : 0);
            return result;
        }
    }
}
