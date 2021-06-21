package com.aliyun.ros.cdk.cr;

/**
 * Properties for defining a `ALIYUN::CR::Repository`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:42.643Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.RepositoryProps")
@software.amazon.jsii.Jsii.Proxy(RepositoryProps.Jsii$Proxy.class)
public interface RepositoryProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property repoName: the name of the repo.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRepoName();

    /**
     * Property repoNamespace: the namespace the repo belongs to.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRepoNamespace();

    /**
     * Property repoType: repository visibility, public or private.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRepoType();

    /**
     * Property summary: description or something alike.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSummary();

    /**
     * Property detail: detailed configuration in markdown format.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDetail() {
        return null;
    }

    /**
     * Property repoSource: Code Source message.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRepoSource() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RepositoryProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RepositoryProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RepositoryProps> {
        private java.lang.Object repoName;
        private java.lang.Object repoNamespace;
        private java.lang.Object repoType;
        private java.lang.Object summary;
        private java.lang.Object detail;
        private java.lang.Object repoSource;

        /**
         * Sets the value of {@link RepositoryProps#getRepoName}
         * @param repoName Property repoName: the name of the repo. This parameter is required.
         * @return {@code this}
         */
        public Builder repoName(java.lang.String repoName) {
            this.repoName = repoName;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getRepoName}
         * @param repoName Property repoName: the name of the repo. This parameter is required.
         * @return {@code this}
         */
        public Builder repoName(com.aliyun.ros.cdk.core.IResolvable repoName) {
            this.repoName = repoName;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getRepoNamespace}
         * @param repoNamespace Property repoNamespace: the namespace the repo belongs to. This parameter is required.
         * @return {@code this}
         */
        public Builder repoNamespace(java.lang.String repoNamespace) {
            this.repoNamespace = repoNamespace;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getRepoNamespace}
         * @param repoNamespace Property repoNamespace: the namespace the repo belongs to. This parameter is required.
         * @return {@code this}
         */
        public Builder repoNamespace(com.aliyun.ros.cdk.core.IResolvable repoNamespace) {
            this.repoNamespace = repoNamespace;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getRepoType}
         * @param repoType Property repoType: repository visibility, public or private. This parameter is required.
         * @return {@code this}
         */
        public Builder repoType(java.lang.String repoType) {
            this.repoType = repoType;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getRepoType}
         * @param repoType Property repoType: repository visibility, public or private. This parameter is required.
         * @return {@code this}
         */
        public Builder repoType(com.aliyun.ros.cdk.core.IResolvable repoType) {
            this.repoType = repoType;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getSummary}
         * @param summary Property summary: description or something alike. This parameter is required.
         * @return {@code this}
         */
        public Builder summary(java.lang.String summary) {
            this.summary = summary;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getSummary}
         * @param summary Property summary: description or something alike. This parameter is required.
         * @return {@code this}
         */
        public Builder summary(com.aliyun.ros.cdk.core.IResolvable summary) {
            this.summary = summary;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getDetail}
         * @param detail Property detail: detailed configuration in markdown format.
         * @return {@code this}
         */
        public Builder detail(java.lang.String detail) {
            this.detail = detail;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getDetail}
         * @param detail Property detail: detailed configuration in markdown format.
         * @return {@code this}
         */
        public Builder detail(com.aliyun.ros.cdk.core.IResolvable detail) {
            this.detail = detail;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getRepoSource}
         * @param repoSource Property repoSource: Code Source message.
         * @return {@code this}
         */
        public Builder repoSource(com.aliyun.ros.cdk.core.IResolvable repoSource) {
            this.repoSource = repoSource;
            return this;
        }

        /**
         * Sets the value of {@link RepositoryProps#getRepoSource}
         * @param repoSource Property repoSource: Code Source message.
         * @return {@code this}
         */
        public Builder repoSource(com.aliyun.ros.cdk.cr.RosRepository.RepoSourceProperty repoSource) {
            this.repoSource = repoSource;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RepositoryProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RepositoryProps build() {
            return new Jsii$Proxy(repoName, repoNamespace, repoType, summary, detail, repoSource);
        }
    }

    /**
     * An implementation for {@link RepositoryProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RepositoryProps {
        private final java.lang.Object repoName;
        private final java.lang.Object repoNamespace;
        private final java.lang.Object repoType;
        private final java.lang.Object summary;
        private final java.lang.Object detail;
        private final java.lang.Object repoSource;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.repoName = software.amazon.jsii.Kernel.get(this, "repoName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.repoNamespace = software.amazon.jsii.Kernel.get(this, "repoNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.repoType = software.amazon.jsii.Kernel.get(this, "repoType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.summary = software.amazon.jsii.Kernel.get(this, "summary", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.detail = software.amazon.jsii.Kernel.get(this, "detail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.repoSource = software.amazon.jsii.Kernel.get(this, "repoSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object repoName, final java.lang.Object repoNamespace, final java.lang.Object repoType, final java.lang.Object summary, final java.lang.Object detail, final java.lang.Object repoSource) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.repoName = java.util.Objects.requireNonNull(repoName, "repoName is required");
            this.repoNamespace = java.util.Objects.requireNonNull(repoNamespace, "repoNamespace is required");
            this.repoType = java.util.Objects.requireNonNull(repoType, "repoType is required");
            this.summary = java.util.Objects.requireNonNull(summary, "summary is required");
            this.detail = detail;
            this.repoSource = repoSource;
        }

        @Override
        public final java.lang.Object getRepoName() {
            return this.repoName;
        }

        @Override
        public final java.lang.Object getRepoNamespace() {
            return this.repoNamespace;
        }

        @Override
        public final java.lang.Object getRepoType() {
            return this.repoType;
        }

        @Override
        public final java.lang.Object getSummary() {
            return this.summary;
        }

        @Override
        public final java.lang.Object getDetail() {
            return this.detail;
        }

        @Override
        public final java.lang.Object getRepoSource() {
            return this.repoSource;
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
            if (this.getRepoSource() != null) {
                data.set("repoSource", om.valueToTree(this.getRepoSource()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cr.RepositoryProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RepositoryProps.Jsii$Proxy that = (RepositoryProps.Jsii$Proxy) o;

            if (!repoName.equals(that.repoName)) return false;
            if (!repoNamespace.equals(that.repoNamespace)) return false;
            if (!repoType.equals(that.repoType)) return false;
            if (!summary.equals(that.summary)) return false;
            if (this.detail != null ? !this.detail.equals(that.detail) : that.detail != null) return false;
            return this.repoSource != null ? this.repoSource.equals(that.repoSource) : that.repoSource == null;
        }

        @Override
        public final int hashCode() {
            int result = this.repoName.hashCode();
            result = 31 * result + (this.repoNamespace.hashCode());
            result = 31 * result + (this.repoType.hashCode());
            result = 31 * result + (this.summary.hashCode());
            result = 31 * result + (this.detail != null ? this.detail.hashCode() : 0);
            result = 31 * result + (this.repoSource != null ? this.repoSource.hashCode() : 0);
            return result;
        }
    }
}
