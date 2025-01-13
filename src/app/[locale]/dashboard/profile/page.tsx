import PageContainer from "@/components/PageContainer";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ProfileForm } from "@/features/profile/ui/profile-form";

export default function SettingsProfilePage() {
  return (
    <PageContainer>
      <div className="space-y-4">
        <Heading title="Profile" description="" />
        <Separator />
        <ProfileForm />
      </div>
    </PageContainer>
  );
}
