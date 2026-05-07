<script>
  import { isMobile } from "$lib";
  import {
    Hero,
    Section,
    SectionHeader,
    TextBlock,
    Reveal,
    MetadataCard,
    CodeBlock,
    TwoColumn,
    ThreeColumn,
    FullColumn,
    CenteredColumn,
    Spacer,
  } from "$lib/components";
  import Image from "$lib/components/Image.svelte";

  const metadata = [
    { label: "Published", value: "07.05.2026" },
    { label: "Category", value: "Security" },
    { label: "Reading Time", value: "4 min" },
  ];
</script>

<svelte:head>
  <title>Building a Cyber Gym</title>
  <meta
    name="description"
    content="How I went from almost taking down our home network to building an isolated lab with Proxmox, pfSense, and WireGuard."
  />
</svelte:head>

<Hero
  title="Building a Cyber Gym"
  subtitle="How I went from almost taking down our home network to building an isolated lab with Proxmox, pfSense, and WireGuard."
/>

<Section padding="sm" border="bottom">
  <TwoColumn ratio="8-4">
    {#snippet left()}{/snippet}
    {#snippet right()}
      <Reveal delay={100}>
        <MetadataCard items={metadata} />
      </Reveal>
    {/snippet}
  </TwoColumn>
</Section>

<Section padding="lg" border="bottom">
  <FullColumn>
    <TextBlock size="md" opacity={0.8}>
      <p>
        <i>"why is the wifi so slow??"</i> my sister wrote to the family chat. I
        didn't see it − I was distracted watching packets fly by that neither originated
        from nor were destined to my laptop. I had messed up the router's ARP cache
        by carrying out an attack I'd read about on the internet. This wasn't my
        first time performing an ARP spoofing attack, but it certainly was my last.
        At least on this LAN. My dad stopped me before I completely crashed our network.
      </p>
      <p>
        Then an idea hit me. I need a <b>Cyber Gym</b>. A safe environment,
        where I can experiment and train my offensive skills. I already knew
        about virtualbox, but I always shied away from it. I thought − my laptop
        was barely running windows... how is it supposed to run multiple
        operating systems on top of my own?
      </p>
    </TextBlock>
  </FullColumn>
  <Spacer />
  <CenteredColumn>
    <TextBlock size="md" opacity={0.8}>
      <p>
        I did some further research and came across Proxmox. The main difference
        between the two is that Proxmox is a type 1 hypervisor, meaning it runs
        directly on hardware instead of running on top of another OS (such as
        Windows, macOS or Linux), sparing a lot of overhead. But that also means
        people usually don't run it on their laptop − you need a dedicated
        server.
      </p>
    </TextBlock>
  </CenteredColumn>
</Section>

<Section>
  <TwoColumn ratio="8-4">
    {#snippet left()}
      <TextBlock size="md" opacity={0.8}>
        <h3>Hardware Prep</h3>
        <p>
          Luckily I already had something at my disposal − A <b
            >Dell OptiPlex 7050</b
          >
          I bought for 300 CHF off of Facebook Marketplace back in 2022. It used
          to run a headless Ubuntu instance and occasionally came to use for deploying
          various side projects.
        </p>
        <p>
          I altered the hardware setup for it to run more efficiently and found
          that the following specs matter most for virtualization:
        </p>
        <ol class="list-decimal">
          <li>Memory</li>
          <li>CPU (cores more than clockspeed)</li>
          <li>Storage</li>
        </ol>
        <p>
          So, I removed the graphics card and added two 8GB RAM sticks, which I
          took from another PC that was just laying around. I then flashed
          Proxmox to a USB drive and after going through the setup wizard it was
          ready to go.
        </p>
      </TextBlock>
    {/snippet}
    {#snippet right()}
      <Image src="/images/cybergym/hardware.jpeg" alt="" />
    {/snippet}
  </TwoColumn>
</Section>
<Section>
  <CenteredColumn>
    <TextBlock size="md" opacity={0.8}>
      <h3>Network Design</h3>
      <p>
        Of course I wanted my machines to be able to talk to each other. Proxmox
        doesn't do this out of the box, but it provides <i>network bridges</i>
        which can be thought of as virtual switches. <code>vmbr0</code> is created
        by default and connects you directly to your home LAN. So, in order to create
        my own network with access to the internet I needed two things:
      </p>
      <ul class="list-disc">
        <li>a bridge (virtual switch that my VM's are connected to)</li>
        <li>a router (for DHCP, Firewall, NAT, DNS etc.)</li>
      </ul>
      <p>
        Creating the bridge was as simple as defining the subnet (in my case
        <code>10.10.1.0/24</code>) and checking the VLAN-aware option. This will
        be important later, when setting up VLANs. For the router I went with
        pfSense. I settled on the following network design:
      </p>
      <Spacer />
      <Image src="/images/cybergym/lab-network.png" alt="" />
      <Spacer size="lg" />
      <p>
        As you can see, pfSense is the only device that has the <code
          >vmbr0</code
        >
        (placing it on the home LAN with its own IP) AND the <code>vmbr1</code>
        interface, which is the "virtual switch" all other machines are connected
        to. Important to note here is that the diagram is merely a logical diagram.
        VLANs are separated by the switch at the
        <i>data link layer</i>. Would this be physically implemented, all VMs
        would be connected to the same switch and it would look like this:
      </p>
      <Spacer />
      <Image src="/images/cybergym/lab-network-physical.png" alt="" />
      <Spacer size="lg" />
      <p>
        So, why the VLANs and not just put them on the same LAN? It's called
        <i>network segmentation</i> and is an essential part of network
        security. It gives the network structure, allows for custom firewall
        rule sets for each segment and adversaires have a harder time to
        <i>move laterally</i> through the network. I'm not that concerned about threats
        emerging in my lab network. I still configured VLANs to try and put my theoretical
        knowledge into practice.
      </p>
    </TextBlock>
  </CenteredColumn>
</Section>
<Section>
  <CenteredColumn>
    <TextBlock opacity={0.8}>
      <h3>Remote Desktop</h3>
      <p>
        Now that my network was ready to go the first machine I installed was
        Kali Linux. While the built-in no-VNC console was handy for quick
        debugging, it was way too laggy to do actual work. I looked into some
        alternatives and found two protocols that would be worth trying − SPICE
        and xRDP.
      </p>
      <p>
        Setting up SPICE was super simple. I just changed the display to "SPICE"
        in the hardware panel and installed a client. That's it. To connect, I
        clicked on "console" and a session file downloaded, which I could double
        click to connect using my client. As convenient as it was, it still
        wasn't as smooth as I liked it to be. I seriously started questioning
        whether my hardware could be the bottleneck. But before investing into
        any upgrades, I figured xRDP would be worth giving a shot.
      </p>
      <p>
        I already expected setting it up would be more difficult, since the xRDP
        service runs on the host, not on Proxmox like SPICE. That means before
        installing anything, I first would have to configure pfSense, so I could
        even reach my Kali machine. But while I was adding Kali to the port
        forwarding list, I noticed my laptop wasn't even able to ping pfSense
        from the home LAN.
      </p>
    </TextBlock>
  </CenteredColumn>
  {#if !$isMobile}<Spacer />{/if}
  <TwoColumn>
    {#snippet left()}
      <TextBlock opacity={0.8}>
        <p>
          Forwarding to Kali is pointless if I can't even reach pfSense.
          Temporarily disabling the firewall made clear, there indeed was some
          firewall rule denying the ICMP packets. Upon further investigation, I
          found a default rule on the WAN interface, blocking ingress traffic
          from private IPs. This rule would make sense if the WAN interface
          actually pointed directly to an ISP. But for my case, I can safely
          disable it.
        </p>
        <p>
          Successfully connecting to Kali through SSH confirmed that I was able
          to reach Kali and could move on to installing the xRDP server. The
          service started without any errors, until I attempted to connect from
          my laptop. Looking at the error logs, I couldn't make out what was
          causing the issue.
        </p>
      </TextBlock>
    {/snippet}
    {#snippet right()}
      <code>
        [11:16:22:617] [237337:00039f1b] [INFO][com.freerdp.core] -
        [rdp_print_errinfo]: ERRINFO_LOGOFF_BY_USER (0x0000000C):The
        disconnection was initiated by the user logging off their session on the
        server. [11:16:22:617] [237337:00039f1b] [ERROR][com.freerdp.core] -
        [rdp_set_error_info]: ERRINFO_LOGOFF_BY_USER [0x0001000C]
      </code>
      <Spacer />
      <code>
        Apr 23 11:21:27 kali xrdp-sesexec[36626]: pam_unix(xrdp-sesman:session):
        session opened for user user1(uid=1000) by user1(uid=0) Apr 23 11:21:27
        kali xrdp-sesexec[36626]: gkr-pam: the password for the login keyring
        was invalid. Apr 23 11:21:30 kali xrdp-sesman[36306]: [INFO ] Session on
        display 10 has finished.
      </code>
    {/snippet}
  </TwoColumn>
  {#if !$isMobile}<Spacer />{/if}
  <CenteredColumn>
    <TextBlock opacity={0.8}>
      <p>
        After countless Google searches and hours of troubleshooting that was
        going nowhere, disappointed, I logged off from the SPICE client and took
        a break. When I returned to re-examine the errors once again, I
        connected to the xRDP server, typed in my credentials and <b>BOOM!</b> A
        <code>1024x768</code> sized window with the Kali Linux desktop. Turns out
        my session managers were conflicting and closing all other sessions solved
        the problem.
      </p>
      <p>
        But when I tried to enter full screen, the window didn't budge. Resizing
        also wouldn't work. I checked the display settings and there was only
        one singular option − <code>1024x768</code>. So I found myself back in
        the xRDP config files and reinstalling <code>xorg</code>. Once again, I
        was trying to fix the issue at the wrong place.
      </p>
      <p>
        When trying out different RDP clients, one of them was able to resize
        the window to full screen. That's when I checked the <code>man</code>
        page of my original RDP client and found exactly what I was looking for −
        the <code>/dynamic-resolution</code> flag.
      </p>
      <p>
        I finally felt content with my remote desktop setup. Until I thought,
        was it really remote? How would I safely access my lab from any other
        location than home? What If I need to access a machine from school or
        when I'm away?
      </p>
    </TextBlock>
  </CenteredColumn>
</Section>
<Section>
  <CenteredColumn>
    <TextBlock size="md" opacity={0.8}>
      <h3>REAL Remote Access</h3>
      <p>
        Usually, to access resources sitting in your home LAN from the outside,
        you need to configure port forwarding for NAT and update firewall rules
        in your home router. For my case, I'd have to do this twice − once for
        my home router and once for pfSense. Then, I'd have to open each single
        port for each single machine. Besides being incredibly time-consuming,
        it more importantly imposes a huge security risk. Each open port makes
        an attack vector. One misconfigured or outdated service would put my
        entire network at risk of a devastating attack. But luckily, pfSense has
        a built-in solution − VPNs.
      </p>
      <p>
        By setting up a VPN, I could expose only one singular port, to which I
        connect to establish an encrypted tunnel to my lab LAN. It effectively
        places my remote workstation on the LAN alongside my other lab machines,
        allowing me to access them from anywhere in the world.
      </p>
      <p>
        As for the protocol, I chose WireGuard for its simplicity and
        performance. I updated pfSense through the console and installed
        WireGuard from the package manager dashboard. After following a video
        guide on how to configure a tunnel and add peers, I ran <code
          >sudo wg-quick up lab</code
        >
        on my laptop. I pinged <code>10.10.0.1</code> and... nothing. Running
        <code>sudo wg show</code> revealed that packets are being sent, but none
        received. I already dealt with a similar issue earlier when pinging pfSense.
        So, I checked the firewall rules.
      </p>
      <p>
        The WireGuard interface passed all traffic and so did the <code
          >wg0</code
        >
        interface. WAN passes all UDP traffic on port <code>51820</code>.
        Diagnostics say packets reach pfSense. So why isn't the server
        responding? After triple-checking my pfSense configuration I finally saw
        it. The WireGuard config file on my laptop connected to
        <code>192.168.1.255</code>
        instead of
        <code>192.168.1.225</code>. This wasn't just any typo − had it been any
        other mistyped digit I probably would've been debugging for 30 minutes
        instead of 3 hours. Because <code>192.168.1.255</code> is the broadcast address
        of the network, the packets were sent to all hosts − including pfSense. That's
        why the packets reached the WireGuard server, but got ignored internally.
      </p>
    </TextBlock>
  </CenteredColumn>
</Section>
<Section>
  <CenteredColumn>
    <TextBlock opacity={0.8}>
      <h3>Conclusion</h3>
      <p>
        Finally, everything was set up and I was ready to create a few basic
        VMs. I added Windows 11, a Ubuntu Server and Metasploitable 2. I enabled
        RDP on the Windows machine and upgraded all packages on the Ubuntu
        server, before creating snapshots of every machine.
      </p>
      <p>
        The time spent fixing all these faults made up the large majority of my
        time on this project, and at times it sure was frustrating. But they
        forced me to go down many paths I wouldn't have explored, if I would've
        had a perfect guide carrying me from flashing the Proxmox USB Drive to
        the point I'm at right now. Those detours taught me more about networks,
        virtualization and services than a tutorial ever could.
      </p>
      <p>
        My future steps will likely include some hardware upgrades, as my 4-core
        i5 won't be able to keep up as the project grows. With the increased
        capacity I'll be able to install an Active Directory, a Windows server
        alongside some more potential targets. To also improve my defensive
        skills, I'm planning on setting up a SIEM (Splunk, Wazuh or both)
        collecting logs from the servers. I'll also set up IPS (like Suricata)
        and see how much harder it is for me to break into my servers.
      </p>
    </TextBlock>
  </CenteredColumn>
</Section>
